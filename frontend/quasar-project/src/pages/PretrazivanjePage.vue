<template>
  <q-page padding>
    <h class="title">Pretraživanje svih knjiga</h>
    <p class="description">Pretražite i pronađite svoje najdraže knjige!</p>

    <div class="search-container">
      <q-input
        v-model="searchQuery"
        label="Unesite pojam za pretragu"
        filled
        clearable
      />

      <q-checkbox
        v-model="searchByTitle"
        label="Pretraži po naslovu"
        color="blue"
      />

      <q-checkbox
        v-model="searchByAuthor"
        label="Pretraži po autoru"
        color="blue"
      />

      <q-btn
        label="Traži"
        color="black"
        @click="searchBooks"
        class="search-button"
      />
    </div>

    <q-table
      v-if="filteredBooks.length > 0"
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
      flat
      bordered
      class="results-table"
    >
      <template v-slot:body-cell-slika="props">
        <q-img
          :src="props.row.slika"
          alt="Naslovnica knjige"
          style="width: 50px; height: auto"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      searchByTitle: true,
      searchByAuthor: false,
      searchExecuted: false,
      books: [
        {
          id: 1,
          naslov: "Harry Potter",
          autor: "J. K. Rowling",
          opis: "Serijal knjiga o čarobnjaku.",
          slika:
            "https://www.pexels.com/photo/scarf-and-eyeglasses-on-the-table-3151954/",
          stanje: 10,
        },
        {
          id: 3,
          naslov: "Preobražaj",
          autor: "Franz Kafka",
          opis: "Priča o čovjeku koji se pretvara u kukca.",
          slika:
            "https://www.pexels.com/photo/magazines-and-books-on-shelf-15248362/",
          stanje: 7,
        },
        {
          id: 3,
          naslov: "Romeo i Julija",
          autor: "Shakespeare",
          opis: "Tragično romantična priča.",
          slika:
            "https://www.pexels.com/photo/statue-in-front-of-a-building-12935831/",
          stanje: 7,
        },
      ],
      filteredBooks: [],

      columns: [
        { name: "id", label: "ID", field: "id", align: "left" },
        { name: "naslov", label: "Naslov", field: "naslov", align: "left" },
        { name: "autor", label: "Autor", field: "autor", align: "left" },
        { name: "opis", label: "Opis", field: "opis", align: "left" },
        { name: "slika", label: "Slika", field: "slika", align: "center" },
        {
          name: "stanje",
          label: "Stanje (ukupan broj primjeraka)",
          field: "stanje",
          align: "right",
        },
      ],
    };
  },
  methods: {
    searchBooks() {
      this.searchExecuted = true;
      this.filteredBooks = this.books.filter((book) => {
        const query = this.searchQuery.toLowerCase();
        return (
          (this.searchByTitle && book.naslov.toLowerCase().includes(query)) ||
          (this.searchByAuthor && book.autor.toLowerCase().includes(query))
        );
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  margin-top: 40px;
  font-weight: bold;
  padding: 20px;
  user-select: none;
}
.description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  padding: 20px;
  user-select: none;
}
.search-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  user-select: none;
}
.search-button {
  margin-left: 10px;
}
.results-table {
  margin-top: 20px;
  user-select: none;
}
.no-results {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 20px;
  color: #777;
  user-select: none;
}
</style>
