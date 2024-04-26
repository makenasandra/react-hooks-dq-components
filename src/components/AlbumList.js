import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  let albumArray = albums.map(album => {
    const {name, image, genre} = album;
    return(
      <AlbumCard
        name={name}
        image={image}
        genre={genre}
      />
    )
  })

  return (
    <section className="albums">
      {albumArray}
    </section>
  );
}

export default AlbumList;
