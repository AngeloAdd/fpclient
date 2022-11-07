<script>
	import { visible } from '$lib/stores/sidebarStatus.js';
	import { isErrorPage } from '$lib/stores/sidebarStatus.js';
	import MainLogo from './MainLogo.svelte';
	import { toggleSidebarClickingOutside } from '$lib/actions/toggle.sidebar.js';
	import SidebarNavElement from './SidebarNavElement.svelte';
	import DashboardSVG from '$lib/images/svg/WinnerSVG.svelte';
	import BetSVG from '$lib/images/svg/BetSVG.svelte';
	import RankSVG from '$lib/images/svg/RankSVG.svelte';
	import WinnerSVG from '$lib/images/svg/WinnerSVG.svelte';
	import ProfileSVG from '../../images/svg/ProfileSVG.svelte';

	$: toggleSidebarClickingOutside();
</script>

<!-- sidebar -->
<aside
	class:-translate-x-full={!$visible}
	class:hidden={$isErrorPage}
	class="flex justify-center sidebar bg-sky-900 text-gray-300 overflow-hidden min-h-full max-h-full xl:max-h-screen xl:min-h-screen w-64 xl:w-72 pt-5 pb-3 top-0 fixed xl:sticky xl:translate-x-0 transform transition duration-200 ease-in-out shadow"
>
	<nav class="divide-y divide-gray-300 flex flex-col justify-between min-w-full px-4">
		<div class="space-y-20">
			<MainLogo navElement={true} />
			<div class="space-y-3">
				<SidebarNavElement anchor="/" text="Dashboard">
					<DashboardSVG />
				</SidebarNavElement>
				<SidebarNavElement anchor="/bet" text="Pronostico">
					<BetSVG />
				</SidebarNavElement>
				<SidebarNavElement anchor="/ranking" text="Classifica">
					<RankSVG />
				</SidebarNavElement>
				<SidebarNavElement anchor="/winner" text="Vincente">
					<WinnerSVG />
				</SidebarNavElement>
			</div>
		</div>
		<div class="pt-3">
			<SidebarNavElement anchor="/profile" text="Profilo">
				<ProfileSVG />
			</SidebarNavElement>
		</div>
	</nav>
</aside>
