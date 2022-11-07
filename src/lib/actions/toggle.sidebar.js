import { browser } from '$app/environment';
import { visible } from '../stores/sidebarStatus.js';

export const toggleSidebarClickingOutside = () => {
	if (browser) {
		let isSidebarVisible;
		visible.subscribe((v) => (isSidebarVisible = v));
		document.body.addEventListener('click', (event) => {
			// if bar is not visible don't do anything
			if (!isSidebarVisible) {
				return null;
			}

			const sidebarBtn = document.querySelector('.sidebar-btn');
			const sidebar = document.querySelector('.sidebar');
			const navElements = Array.from(document.querySelectorAll('.nav-elements'));

			const isOneOfNavElementsClick = navElements.some((navElement) => {
				return navElement === event.target && navElement.contains(event.target);
			});
			const isOutsideClick = sidebar !== event.target && !sidebar.contains(event.target);
			const isButtonClick = sidebarBtn === event.target && sidebarBtn.contains(event.target);

			// btn click is managed by svelte events in other cases don't do anything
			if (isButtonClick || (!isOutsideClick && !isOneOfNavElementsClick)) {
				return null;
			}

			// check to see if user clicks outside the sidebar or one of sidebar elements
			// if (!isButtonClick && isOutsideClick) {
			visible.set(false);
			return null;
			// }
		});
	}
};
