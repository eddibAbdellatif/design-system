<template>
	<MaintenancePage>
		<template #default>
			<VBtn
				color="primary"
				to="/"
				class="mt-8"
			>
				Retour à l’accueil
			</VBtn>
		</template>

		<template #illustration>
			<img
				:src="require('@cnamts/vue-dot/src/assets/images/empty-sheets.svg')"
				alt=""
				width="170"
			>
		</template>
	</MaintenancePage>
</template>

<style lang="scss" scoped>
	// Update padding to give more space to the component for documentation
	.vd-page-container {
		padding: 0 !important;
	}
</style>
