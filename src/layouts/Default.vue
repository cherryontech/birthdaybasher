<template>
  <div class="min-h-screen p-4 md:p-8 xl:p-12">
    <header class="max-w-screen-2xl mx-auto">
      <g-image
        alt="Cherry on Tech logo"
        src="~/favicon.png"
        class="mx-auto w-11 md:w-16"
      />
    </header>
    <main class="max-w-screen-2xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
