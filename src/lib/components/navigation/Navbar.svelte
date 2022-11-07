<script>
	import { visible, isErrorPage } from '$lib/stores/sidebarStatus.js';
	import MainLogo from './MainLogo.svelte';
</script>

<!-- mobile menu bar -->
<div
	class:hidden={$isErrorPage}
	class:bg-gray-100={!$visible}
	class:shadow-lg={!$visible}
	class="flex justify-between xl:hidden sticky top-0 duration-500"
>
	<!-- logo -->
	<MainLogo navElement={true} isNavBar={true} />
	<!-- mobile menu button -->
	<button
		on:click={() => visible.update((value) => !value)}
		class:rounded-l-[50%]={$visible}
		class:shadow-lg={$visible}
		class="sidebar-btn text-sky-900 mobile-menu-button p-4 focus:outline-none bg-gray-100"
	>
		<span
			class:-rotate-45={$visible}
			class:translate-x-1={$visible}
			class:translate-y-1.5={$visible}
			class="nav-elements duration-500 block rounded-xl bg-gray-700 h-0.5 m-1 w-5 bar1"
		/>
		<span
			class:opacity-0={$visible}
			class="nav-elements block rounded-xl bg-gray-700 h-0.5 m-1 w-5 duration-500"
		/>
		<span
			class:rotate-45={$visible}
			class:translate-x-1={$visible}
			class:-translate-y-1.5={$visible}
			class="nav-elements duration-500 block rounded-xl bg-gray-700 h-0.5 m-1 w-5 bar3"
		/>
	</button>
</div>
