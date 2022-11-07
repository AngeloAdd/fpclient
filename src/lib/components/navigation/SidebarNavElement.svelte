<script>
	export let anchor;
	export let text;
</script>

<a
	href={anchor}
	class="nav-elements flex justify-evenly text-xl py-2.5 rounded transition duration-200 hover:bg-gray-300 hover:text-gray-700"
>
	<span class="nav-elements pt-0.5 pl-6">
		<slot />
	</span>
	<span class="nav-elements flex-auto text-center pr-6">{text}</span>
</a>
