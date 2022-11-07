<script>
	import { isErrorPage } from '../../stores/sidebarStatus.js';

	export let navElement = false;
	export let isNavBar = false;
</script>

<h1
	class:nav-elements={navElement}
	class:pl-3={isNavBar}
	class="text-center text-3xl py-3.5 px-1.5"
>
	<a on:click={() => isErrorPage.set(false)} href="/" class:nav-elements={navElement}> FP2022 </a>
</h1>
