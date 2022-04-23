const mapper = (data) => {
  return data.map(({ id, backdrop_path, title }) => {
    return {
      id: id,
      image: backdrop_path,
      title: title,
      watched: false,
    };
  });
};

export default mapper;
