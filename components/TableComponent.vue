<template>
  <table>
    <!-- <caption>
      Statement Summary
    </caption> -->
    <thead>
      <tr>
        <th scope="col" v-for="(th, index) in data.th" :key="index">{{ th }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(td, index) in data.td" :key="index">
        <td data-label="Account" class="account">
          <span><img :src="`/images/${td.image}`" alt="" />{{ td.name }}</span>
        </td>
        <td data-label="Due Date" class="date">{{ td.date }}</td>
        <td data-label="Amount" class="amount">
          <span>{{ td.amount }}</span>
        </td>
        <td data-label="status" :class="td.status">
          <span>{{ td.status }}</span>
        </td>
        <td data-label="invoice" class="invoice">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                fill="#292D32"
              />
              <path
                d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                fill="#292D32"
              />
              <path
                d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                fill="#292D32"
              />
              <path
                d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                fill="#292D32"
              />
            </svg>
            View
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
table {
  /* border: 1px solid #ccc; */
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  border-bottom: 1px solid var(--border);
  padding: 0.35em;
}

table th {
  padding-top: -2px;
  padding-bottom: 20px;
  text-align: left;
}
table td {
  padding-top: 12px;
  padding-bottom: 16px;
  text-align: left;
}

table td {
  color: var(--color-sales-sort-by);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

.date {
  color: var(--color-table-light-grey);
  font-weight: 400;
}

.amount span {
  color: var(--color-table-violet);
}

table th {
  color: var(--color-table-header);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

.account span {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.invoice span {
  display: flex;
  /* width: 80px; */
  align-items: center;
  /* justify-content: center; */
  gap: 6px;
  color: var(--color-table-violet);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
}

td.paid span {
  color: var(--color-green);
}
td.refund span {
  color: var(--color-red);
}

@media screen and (max-width: 1094px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    /* border-bottom: 4px dotted #ddd; */
    display: block;
    margin-bottom: 16px;
    background: var(--body-bg);
    border-radius: 5px;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }

  .account span {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }

  .invoice span {
    justify-content: flex-end;
  }
}
</style>
