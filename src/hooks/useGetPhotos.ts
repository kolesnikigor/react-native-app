import {useEffect, useState} from 'react';

import {getPhotos} from '../Apis/Api'

export interface IPhoto {
  "albumId": number;
  "id": number;
  "title": string;
  "url": string;
  "thumbnailUrl": string;
}

const LIMIT = 20;

export function useGetPhotos() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPhotos(0, LIMIT).then(photos => {
      setPhotos(photos);
      setIsLoading(false);
    })
  }, []);

  const onEndReached = () => setPage(page + 1);

  useEffect(() => {
    getNewPhotos();
  }, [page]);

  async function getNewPhotos() {
    const newPhotos = await getPhotos(page, LIMIT);
    setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
  }

  async function onRefresh() {
    setIsRefreshing(true);
    const newPhotos = await getPhotos(0, photos.length);
    setPhotos(newPhotos);
    setIsRefreshing(false);
  }

  return {isLoading, photos, onEndReached, isRefreshing, onRefresh};
}
