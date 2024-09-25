import React from 'react';

const baseUrl = `https://test.create.diagnal.com/`

const MovieGallery= React.memo(({movies}) => {
  return (
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 overflow-y-auto mb-4">
        {movies?.map((movie,index) => (
             <div key={index} className="flex flex-col mb-2">
             <img src={`${baseUrl}images/${movie['poster-image']}`} alt={movie.name} className="w-full h-[12rem] md:h-auto" />
             <div className="mt-2 ml-0 text-left">{movie.name}</div>
             </div>
        ))}
      </div>
  );
});

export default MovieGallery;
