import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');

  async function fetchData(tag) {
    setLoading(true);

    //api call
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    // api data rendering with ....
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  },[])

  return {gif, loading, fetchData};
}

export default useGif