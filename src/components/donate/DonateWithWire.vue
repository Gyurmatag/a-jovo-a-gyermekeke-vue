<template>
    <div class="flex flex-col items-center divide-y divide-primary">
      <div>{{ $t('donate.withWire.accountNameLabel') }}</div>
      <div class="text-gray-500">{{ $t('donate.withWire.accountName') }}</div>
    </div>
    <div class="flex flex-col items-center divide-y divide-primary">
      <div>{{ $t('donate.withWire.accountNumberLabel') }}</div>
      <div class="text-gray-500">{{ $t('donate.withWire.accountNumber') }}</div>
    </div>
</template>

<script>

export default {
  name: 'DonateWithWire',
};
</script>
