import React from "react";
import { MdAudiotrack } from "react-icons/md";
import { IItem } from "./IItem";

function Item(props: IItem) {

    const { artist, title, album, itemImgUrl, ranking, time, spotifyUrl } = props;

    var a = "https://i.scdn.co/image/ab67616d00004851b7f847187cfc3e5050420278";

    return (
        <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
            <span className="text-text-subdued">{ranking}</span>
            <img src={itemImgUrl} className="rounded-lg" />
            <div className="flex flex-1 flex-col justify-between h-full">
                <span className="text-text-base">
                    {title}
                </span>
                <span className="text-text-subdued">
                    {artist}
                </span>
            </div>
            <span className="flex-1 text-text-base text-right">
                {album}
            </span>
            <span className="flex-1 text-text-base text-center">
                {time}
            </span>
            <a href={spotifyUrl} target="_blank" className="text-text-base text-right">
                <MdAudiotrack />
            </a>
        </li>
    )
}

export { Item };