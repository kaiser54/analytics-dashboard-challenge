<template>
  <div class="class__wrap">
    <colormode />
    <main class="container__wrapper">
      <CardWrapper style="height: 374px;">
       <div class="platform">
        <header>
          <div class="header__text">Sales Trends</div>
          <div class="sort__select">
            <p>Sort by :</p>
            <div style="position: relative">
              <div class="select__wrap select__text" @click="handleOpenSelect()">
                {{ SelectedOption }}
                <svg
                  class="select__svg"
                  :class="{ rotate: rotate }"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="chevron-down-arrow">
                    <path
                      id="Vector"
                      d="M2.6665 5.33331L7.99984 10.6666L13.3332 5.33331"
                      stroke="#303237"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <CardWrapper
                :class="{
                  dropdown__menu: true,
                  'slide-in': showDropdown,
                  'slide-out': !showDropdown,
                }"
              >
                <ul>
                  <li
                    class="select__text"
                    v-for="option in options"
                    :key="option"
                    @click="selectOption(option)"
                  >
                    {{ option }}
                  </li>
                </ul>
              </CardWrapper>
            </div>
          </div>
        </header>
        <div class="chartt">
          <BarChart />
        </div>
       </div>
      </CardWrapper>
      <div class="crypto__card__wrap">
        <CardWrapper
          class="card crypto__card"
          v-for="(crypto, index) in cryptoData"
          :key="index"
        >
          <!-- <div class="crypto__card"> -->
          <div class="top__section">
            <div class="circle">
              <img :src="`/svg/${crypto.svg}.svg`" alt="" />
            </div>
            <div class="crypto__graph">
              <img :src="`/svg/${crypto.rate}.svg`" alt="" />
            </div>
          </div>

          <div class="middle__section">
            <p>{{ crypto.name }}</p>
            <h3><span v-if="crypto.type === 'price'">$</span> {{ crypto.value }}</h3>
          </div>

          <div class="bottom__section">
            <div class="rate__tag" :class="crypto.rate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
                  stroke="#ED544E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 5.5H9.5V2"
                  stroke="#ED544E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>23,5%</span>
            </div>
            <div class="duration">vs. previous month</div>
          </div>
          <!-- </div> -->
        </CardWrapper>
      </div>
      <!-- <NuxtPage /> -->
    </main>
    <section class="container__wrapper" style="margin-top: 20px">
      <CardWrapper>
        <div class="platform">
          <header>
            <div class="header__text">Last Orders</div>
            <div class="header__cta">See All</div>
          </header>
          <TableComponent :data="{ th: tableHead, td: transactions }" />
        </div>
      </CardWrapper>
      <CardWrapper class="platform__wrap">
        <div class="platform">
          <header>
            <div class="header__text">Top Platform</div>
            <div class="header__cta">See All</div>
          </header>
          <div class="platform__wrap">
            <div class="platform__bar" v-for="(data, index) in Platform" :key="index">
              <div class="title">{{ data.name }}</div>
              <div class="bar">
                <span :style="{ '--bgColor': data.color, '--width': data.width }"></span>
              </div>
              <div class="snippet">
                <span>${{ data.value }}</span> <span>{{ data.increase }}</span>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const Platform: Array<{
  name: string;
  value: number;
  rate: string;
  increase: string;
  color: string;
  width: string;
}> = [
  {
    name: "Book Bazaar",
    value: 2500000,
    rate: "45%",
    increase: "+15%",
    color: "#6160DC",
    width: "50%",
  },
  {
    name: "Artisan Aisle",
    value: 1800000,
    rate: "30%",
    increase: "+10%",
    color: "#54C5EB",
    width: "40%",
  },
  {
    name: "Toy Troop",
    value: 1200000,
    rate: "20%",
    increase: "+8%",
    color: "#FFB74A",
    width: "20%",
  },
];


type Transaction = {
  name: string;
  image: string;
  date: string;
  amount: string;
  status: 'paid' | 'refund';
};

const transactions: Transaction[] = [
  {
    name: 'Marcus Bergson',
    image: '1.png',
    date: 'Nov 15, 2023',
    amount: "$80,000",
    status: 'paid',
  },
  {
    name: 'Jaydon Vaccaro',
    image: '2.png',
    date: 'Nov 15, 2023',
    amount: "$150,000",
    status: 'refund',
  },
  {
    name: 'Corey Schleifer',
    image: '3.png',
    date: 'Nov 14, 2023',
    amount: "$87,000",
    status: 'paid',
  },
  {
    name: 'Cooper Press',
    image: '4.png',
    date: 'Nov 14, 2023',
    amount: "$100,000",
    status: 'refund',
  },
  {
    name: 'Phillip Lubin',
    image: '5.png',
    date: 'Nov 13, 2023',
    amount: "$78,000",  
    status: 'paid',
  },
];




const cryptoData: Array<{
  name: string;
  value: number;
  type?: string; // optional property for the 'Total Income' item
  percentage: string;
  rate: string;
  svg: string;
}> = [
  {
    name: "Total Order",
    value: 350,
    percentage: "23.5%",
    rate: "high",
    svg: "order",
  },
  {
    name: "Total Refund",
    value: 270,
    percentage: "23.5%",
    rate: "low",
    svg: "refund",
  },
  {
    name: "Average Sales",
    value: 1567,
    percentage: "23.5%",
    rate: "low",
    svg: "sales",
  },
  {
    name: "Total Income",
    value: 3500.0,
    type: "price",
    percentage: "23.5%",
    rate: "high",
    svg: "income",
  },
];

const tableHead: string[] = ["Name", "Date", "Amount", "Status", "Invoice"];

const showDropdown: { value: boolean } = ref(false);
const rotate: { value: boolean } = ref(false);
const options: string[] = ["Daily", "Weekly", "Monthly", "Yearly", "All time"];
const SelectedOption: { value: string } = ref("Weekly");
const selectOption = (e: string): void => {
  SelectedOption.value = e;
  showDropdown.value = false;
};
const handleOpenSelect = (): void => {
  rotate.value = !rotate.value;
  showDropdown.value = !showDropdown.value;
};
</script>

<style scoped>
.chartt {
  width: 100%;
  height: 90%;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
