<script>
	import userSVG from '$lib/images/svg/user.svg';
	import Countdown from '$lib/components/countdown/Countdown.svelte';

	export let data;

	const { nextGame, user } = data;
	const list = 1;
</script>

<div class="flex flex-col w-full space-y-4">
	<div
		class="flex flex-wrap sm:grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 2lg:grid-cols-10 grid-rows-2 bg-gray-100 p-5 rounded-xl gap-3 shadow-lg"
	>
		<img
			class="h-24 w-24 sm:row-span-2 p-1 rounded-full ring-2 ring-sky-900"
			src={userSVG}
			alt="Bordered avatar"
		/>
		<h2
			class="sm:col-start-2 sm:col-span-4 text-3xl text-sky-900 font-sans self-center sm:self-end"
		>
			Ciao, {user.name}!
		</h2>
		<p class="sm:col-span-4 sm:col-start-2 text-gray-700/50 text-lg">
			Qui c'è un overview di quanto stai facendo schifo!
		</p>
	</div>

	<div
		class="flex md:flex-row flex-col justify-around align-middle md:space-x-2 md:space-y-0 space-y-4"
	>
		{#if list === 0}
			<div
				class="p-6 sm:pt-14 max-w-sm w-full min-h-full bg-gray-100 rounded-lg shadow-lg space-y-8"
			>
				<a href="#">
					<h5
						class="text-center mb-2 font-bold tracking-tight text-sky-900 font-semibold font-sans"
					>
						Gli incontri programmati per oggi sono finiti
					</h5>
				</a>
				<a
					href="#"
					class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
				>
					Controlla il calendario completo
					<svg
						aria-hidden="true"
						class="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
			</div>
		{:else}
			<div class="p-6 max-w-sm w-full min-h-full bg-gray-100 rounded-lg shadow-lg space-y-8">
				<a href="/bet">
					<h5
						class="text-center mb-2 font-bold tracking-tight text-sky-900 font-semibold font-sans"
					>
						Non dimenticare il pronostico di <br
						/>{`${nextGame.first.name} VS ${nextGame.second.name}`}
					</h5>
				</a>
				<Countdown dateTo={nextGame.startDate} let:countDown>
					<div class="flex justify-evenly font-sans text-sky-900 text-lg font-normal">
						{#if typeof countDown === 'string'}
							<span class="text-gray-700/50">{countDown}</span>
						{:else}
							<div role="status">
								<svg
									aria-hidden="true"
									class="mr-2 w-8 h-8 text-gray-700/50 animate-spin fill-sky-900"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<span class="sr-only">Loading...</span>
							</div>
						{/if}
						<!--						<p class="text-gray-700/50">{remaining.days.toString().length === 1 ? `0${remaining.days}` : remaining.days}</p>-->
						<!--						<p class="text-gray-700/50">:</p>-->
						<!--						<p class="text-gray-700/50">{remaining.hours.toString().length === 1 ? `0${remaining.hours}` : remaining.hours}</p>-->
						<!--						<p class="text-gray-700/50">:</p>-->
						<!--						<p class="text-gray-700/50">{remaining.minutes.toString().length === 1 ? `0${remaining.minutes}` : remaining.minutes}</p>-->
						<!--						<p class="text-gray-700/50">:</p>-->
						<!--						<p class="text-gray-700/50">{remaining.seconds.toString().length === 1 ? `0${remaining.seconds}` : remaining.seconds}</p>-->
					</div>
				</Countdown>
				<a
					href="/bet"
					class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
				>
					Vai
					<svg
						aria-hidden="true"
						class="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
			</div>
		{/if}

		<div class="rounded-xl overflow-x-auto">
			<table class="w-full text-sm text-left bg-gray-100 text-gray-700 rounded-xl">
				<thead class="text-xs uppercase bg-sky-900 text-gray-200">
					<tr>
						<th colspan="5" class="text-center py-3 px-6"> Prossimi incontri </th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap"> Quatar </th>
						<td class="py-2 px-6"> Turchia </td>
						<td class="py-2 px-6"> 10/10/2022 ore 11:00 </td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap"> Quatar </th>
						<td class="py-2 px-6"> Turchia </td>
						<td class="py-2 px-6"> 10/10/2022 ore 11:00 </td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap"> Quatar </th>
						<td class="py-2 px-6"> Turchia </td>
						<td class="py-2 px-6"> 10/10/2022 ore 11:00 </td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 whitespace-nowrap" />
						<td class="py-2 px-6" />
						<td class="py-2 px-6" />
						<td class="py-2 px-6">
							<p class="invisible inline-flex py-1 px-3">FILL</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="rounded-xl overflow-x-auto">
			<table class="w-full text-sm text-left bg-gray-100 text-gray-700 rounded-xl">
				<thead class="text-xs uppercase bg-sky-900 text-gray-200">
					<tr>
						<th colspan="5" class="text-center py-3 px-6"> Ultimi Risultati </th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap">Quatar - Turchia</th>
						<td class="py-2 px-6">5-2(1) | Filippo - Peppino</td>
						<td class="py-2 px-6">9</td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap">Quatar - Turchia</th>
						<td class="py-2 px-6">5-2(1) | Filippo - Peppino</td>
						<td class="py-2 px-6">9</td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 font-medium whitespace-nowrap">Quatar - Turchia</th>
						<td class="py-2 px-6">5-2(1) | Filippo - Peppino</td>
						<td class="py-2 px-6">9</td>
						<td class="py-2 px-6">
							<a
								href="/bet"
								class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-gray-7000"
							>
								Vai
								<svg
									aria-hidden="true"
									class="ml-2 -mr-1 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</td>
					</tr>
					<tr class="border-b">
						<th scope="row" class="py-2 px-6 whitespace-nowrap" />
						<td class="py-2 px-6" />
						<td class="py-2 px-6" />
						<td class="py-2 px-6">
							<p class="invisible inline-flex py-1 px-3">FILL</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="overflow-x-auto rounded-xl">
		<table class="w-full text-sm text-left text-gray-700 bg-gray-100">
			<thead class="text-xs text-gray-300 uppercase bg-sky-900">
				<tr>
					<th scope="col" class="py-3 px-6"> Posizione </th>
					<th scope="col" class="py-3 px-6"> Nome </th>
					<th scope="col" class="py-3 px-6"> Punti </th>
					<th scope="col" class="py-3 px-6"> Esatti </th>
					<th scope="col" class="py-3 px-6"> Segni </th>
					<th scope="col" class="py-3 px-6"> Gol </th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-b">
					<th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"> 1 </th>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Accessories </td>
					<td class="py-4 px-6"> $99 </td>
				</tr>
				<tr class="border-b">
					<th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"> 1 </th>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Accessories </td>
					<td class="py-4 px-6"> $99 </td>
				</tr>
				<tr class="border-b">
					<th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"> 1 </th>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Accessories </td>
					<td class="py-4 px-6"> $99 </td>
				</tr>
				<tr class="border-b">
					<th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"> 1 </th>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Accessories </td>
					<td class="py-4 px-6"> $99 </td>
				</tr>
				<tr class="border-b">
					<th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"> 1 </th>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Black </td>
					<td class="py-4 px-6"> Accessories </td>
					<td class="py-4 px-6"> $99 </td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
