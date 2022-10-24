import React from "react";
import { MdAudiotrack } from "react-icons/md";
import { IList } from "./IList";

function List(props: IList) {

    const { period } = props;

    return (
        <div id={`list-${period}`} className="gap-2">
            <ul className="gap-2">
                <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
                    <span className="text-text-subdued">1</span>
                    <img src="https://i.scdn.co/image/ab67616d00004851b7f847187cfc3e5050420278" className="rounded-lg" />
                    <div className="flex flex-1 flex-col justify-between h-full">
                        <span className="text-text-base">
                            Ontem ao Luar
                        </span>
                        <span className="text-text-subdued">
                            Rubel
                        </span>
                    </div>
                    <span className="flex-1 text-text-base text-right">
                        Ontem ao Luar
                    </span>
                    <span className="flex-1 text-text-base text-center">
                        04:23
                    </span>
                    <button className="text-text-base text-right">
                        <MdAudiotrack />
                    </button>
                </li>
                <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
                    <span className="text-text-subdued">2</span>
                    <img src="https://i.scdn.co/image/ab67616d00004851eabb288490733f35809d5a3e" className="rounded-lg" />
                    <div className="flex flex-1 flex-col justify-between h-full">
                        <span className="text-text-base">
                            Moons
                        </span>
                        <span className="text-text-subdued">
                            Moons
                        </span>
                    </div>
                    <span className="flex-1 text-text-base text-right">
                        Thinking Out Loud
                    </span>
                    <span className="flex-1 text-text-base text-center">
                        04:23
                    </span>
                    <button className="text-text-base text-right">
                        <MdAudiotrack />
                    </button>
                </li>
                <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
                    <span className="text-text-subdued">3</span>
                    <img src="https://i.scdn.co/image/ab67616d000048515abd8a958fb9197ce5ff46c0" className="rounded-lg" />
                    <div className="flex flex-1 flex-col justify-between h-full">
                        <span className="text-text-base">
                            Be Here Now
                        </span>
                        <span className="text-text-subdued">
                            Gustavo Bertoni
                        </span>
                    </div>
                    <span className="flex-1 text-text-base text-right">
                        Where Light Pours In
                    </span>
                    <span className="flex-1 text-text-base text-center">
                        04:23
                    </span>
                    <button className="text-text-base text-right">
                        <MdAudiotrack />
                    </button>
                </li>
                <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
                    <span className="text-text-subdued">4</span>
                    <img src="https://i.scdn.co/image/ab67616d000048510f79af98814bfacf5a01ca2b" className="rounded-lg" />
                    <div className="flex flex-1 flex-col justify-between h-full">
                        <span className="text-text-base">
                            Pra Sonhar
                        </span>
                        <span className="text-text-subdued text-sm">
                            Marcelo Jeneci, Laura Lavieri
                        </span>
                    </div>
                    <span className="flex-1 text-text-base text-right">
                        Feito Pra Acabar
                    </span>
                    <span className="flex-1 text-text-base text-center">
                        04:23
                    </span>
                    <button className="text-text-base text-right">
                        <MdAudiotrack />
                    </button>
                </li>
                <li className="flex items-center w-full hover:bg-background-tinted-base p-2 gap-2 rounded-lg">
                    <span className="text-text-subdued">5</span>
                    <img src="https://i.scdn.co/image/ab67616d00004851e714d4653a51c67917a73b19" className="rounded-lg" />
                    <div className="flex flex-1 flex-col justify-between h-full">
                        <span className="text-text-base">
                            A Voz da Tela
                        </span>
                        <span className="text-text-subdued text-sm">
                            Oswaldo Montenegro
                        </span>
                    </div>
                    <span className="flex-1 text-text-base text-right">
                        A Voz da Tela
                    </span>
                    <span className="flex-1 text-text-base text-center">
                        04:23
                    </span>
                    <button className="text-text-base text-right">
                        <MdAudiotrack />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export { List };