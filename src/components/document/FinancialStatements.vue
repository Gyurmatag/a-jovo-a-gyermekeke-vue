<template>
  <div class="flex flex-col items-center mb-8 space-y-8 rounded">
    <div class="flex w-full justify-center py-5 bg-gray-600 text-xl text-white">
      {{ $t('documents.financialStatements.title') }}
    </div>
    <!-- TODO: komponensek készítése a financial statementeknek -->
    <div class="w-full max-w-xl p-5 bg-gray-600 text-gray-300 text-center rounded-lg">
      <div>{{ $t('documents.financialStatements.year.2021') }}</div>
      <a href="https://res.cloudinary.com/gyurmatag/image/upload/v1656002434/A%20J%C3%B6v%C5%91%20a%20Gyermekek%C3%A9/beszamolo_2021..pdf"
         target="_blank">
        <img alt="PDF ikon"
             src="../../assets/svgs/pdf.svg"
             class="m-auto h-14 p-2"
        >
      </a>
    </div>
    <div class="w-full max-w-xl p-5 bg-gray-600 text-gray-300 text-center rounded-lg">
      <div>{{ $t('documents.financialStatements.year.2020') }}</div>
      <a href="https://res.cloudinary.com/gyurmatag/image/upload/v1629387181/A%20J%C3%B6v%C5%91%20a%20Gyermekek%C3%A9/besza%CC%81molo%CC%812020..pdf"
         target="_blank">
        <img alt="PDF ikon"
             src="../../assets/svgs/pdf.svg"
             class="m-auto h-14 p-2"
        >
      </a>
    </div>
    <div class="w-full max-w-xl p-5 bg-gray-600 text-gray-300 text-center rounded-lg">
      <div>{{ $t('documents.financialStatements.year.2019') }}</div>
      <a href="https://res.cloudinary.com/gyurmatag/image/upload/v1629473473/A%20J%C3%B6v%C5%91%20a%20Gyermekek%C3%A9/besza%CC%81molo%CC%81_2019..pdf"
         target="_blank">
        <img alt="PDF ikon"
             src="../../assets/svgs/pdf.svg"
             class="m-auto h-14 p-2"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialStatements',

};
</script>
