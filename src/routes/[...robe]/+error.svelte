<script>
	import { page } from '$app/stores';
	import { isErrorPage } from '$lib/stores/sidebarStatus.js';
	import svg404 from './404.svg';

	isErrorPage.set(true);
</script>

<div class="flex flex-col justify-center h-full align-middle space-y-3">
	<div>
		<a
			on:click={() => isErrorPage.set(false)}
			href="/"
			class="flex justify-center font-medium text-center"
		>
			<h1 class="border-4 border-sky-900 md:py-3.5 md:px-1.5 p-1">
				<span class="md:text-6xl text-3xl bg-sky-900 text-gray-100 px-1 font-sans">FP2022</span>
			</h1>
		</a>
		<p class="text-center md:text-lg pt-3">
			<span class="font-extrabold title-font">
				{$page.status}:
			</span>
			{$page.error.message}
		</p>
	</div>
	<div class="flex justify-center">
		<img src={svg404} alt="404 status" class="md:h-full h-80 md:max-h-full md:max-w-full" />
	</div>
</div>
