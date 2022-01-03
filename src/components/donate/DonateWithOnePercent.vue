<template>
  <div class="flex flex-col items-center">
    <div class="w-4/5 lg:w-2/4 items-center
                text-center divide-y divide-primary space-y-2">
      <p>
        <span>{{ $t('donate.withOnePercent.description.firstLine.electronic') }}</span>
        <a :href="$t('donate.withOnePercent.description.firstLine.electronicLink')"
           class="text-ekecolor"
           target="_blank">
          {{ $t('donate.withOnePercent.description.firstLine.electronicLink') }}
        </a>
        <span>{{ $t('donate.withOnePercent.description.firstLine.throughPage') }}</span>
      </p>
      <p class="text-sm text-gray-500">{{ $t('donate.withOnePercent.description.secondLine') }}</p>
      <p>
        <span>{{ $t('donate.withOnePercent.description.thirdLine.customerBridge') }}</span>
        <a :href="$t('donate.withOnePercent.description.thirdLine.customerBridgeSite')"
           class="text-ekecolor"
           target="_blank">
          {{ $t('donate.withOnePercent.description.thirdLine.customerBridgeSite') }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DonateWithOnePercent',
};
</script>
