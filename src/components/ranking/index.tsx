import React from "react";
import { MdAudiotrack } from "react-icons/md";
import { Head } from "./head";
import { IRanking } from "./IRanking";
import { List } from "./list";

function Ranking(props: IRanking) {

    const { head, period } = props;

    return (
        <div id={period} className="flex-1 flex flex-col justify-between w-full bg-background-highlight rounded-xl p-2">
            <Head period={period} title={head.title} urlImg={head.urlImg} />
            <hr className="text-text-subdued text-sm" />
            <List period={period} />
            <div id={`show-more-${period}`}>
                <button className="bg-spotify-green hover:bg-spotify-green-bright rounded-bl-lg rounded-br-lg w-full p-2">
                    Ver mais
                </button>
            </div>
        </div>
    )
}

export { Ranking };