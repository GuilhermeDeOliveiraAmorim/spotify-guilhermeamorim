function App() {

	return (
		<div className='flex flex-col justify-between h-screen bg-spotify-green'>
			<header className='flex justify-between items-center bg-background-base p-4 text-text-base'>
				<h1>
					Nome
				</h1>
				<div className="flex justify-between items-center gap-6">
					<h2>
						Guilherme Amorim
					</h2>
					<img src="https://avatars.githubusercontent.com/u/5620529?v=4" className="rounded-full h-10" />
				</div>
			</header>
			<main className='h-screen flex justify-between p-4 gap-4'>
				<div id="day" className="flex-1 flex flex-col justify-between w-full bg-background-highlight rounded-xl p-2">
					<div id="head-list-day" className="flex gap-6">
						<img src="https://i.scdn.co/image/ab67706c0000bebb667524ffe97221bd9dd9cb5b" className="h-32" />
						<h2 className="text-text-base">
							day
						</h2>
					</div>
					<hr className="text-text-subdued text-sm" />
					<div id="list-week" className="gap-2">
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
							</li>
						</ul>
					</div>
					<div id="show-more-day">
						<button className="bg-spotify-green rounded-bl-lg rounded-br-lg w-full p-2">
							Ver mais
						</button>
					</div>
				</div>
				<div id="week" className="flex-1 flex flex-col justify-between w-full bg-background-highlight rounded-xl p-2">
					<div id="head-list-week" className="flex flex-col gap-2">
						<div className="flex gap-6">
							<img src="https://i.scdn.co/image/ab67706c0000bebb667524ffe97221bd9dd9cb5b" className="h-32 rounded-lg" />
							<div>
								<h2 className="text-text-base">
									week
								</h2>
								<h2 className="text-text-base">
									week
								</h2>
							</div>
						</div>
						<hr className="text-text-subdued text-sm" />
						<div id="list-week" className="gap-2">
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
									<span className="text-text-base text-right">
										...
									</span>
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
									<span className="text-text-base text-right">
										...
									</span>
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
									<span className="text-text-base text-right">
										...
									</span>
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
									<span className="text-text-base text-right">
										...
									</span>
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
									<span className="text-text-base text-right">
										...
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div id="show-more-week">
						<button className="bg-spotify-green rounded-bl-lg rounded-br-lg w-full p-2">
							Ver mais
						</button>
					</div>
				</div>
				<div id="month" className="flex-1 flex flex-col justify-between w-full bg-background-highlight rounded-xl p-2">
					<div id="head-list-month" className="flex gap-6">
						<img src="https://i.scdn.co/image/ab67706c0000bebb667524ffe97221bd9dd9cb5b" className="h-32" />
						<h2 className="text-text-base">
							month
						</h2>
					</div>
					<hr className="text-text-subdued text-sm" />
					<div id="list-week" className="gap-2">
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
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
								<span className="text-text-base text-right">
									...
								</span>
							</li>
						</ul>
					</div>
					<div id="show-more-month">
						<button className="bg-spotify-green rounded-bl-lg rounded-br-lg w-full p-2">
							Ver mais
						</button>
					</div>
				</div>
			</main>
			<footer className='bg-background-base p-4'>
				<h2 className="text-text-base">
					www.guilhermeamorim.com
				</h2>
			</footer>
		</div>
	)
}

export default App;