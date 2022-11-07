<script>
	import '../app.css';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import Main from '$lib/components/main/Main.svelte';
</script>

<div class="xl:flex">
	<Navigation />
	<Main>
		<slot />
	</Main>
</div>
