<template>
  <q-page padding>
    <!-- content -->
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://www.pexels.com/photo/assorted-books-on-shelf-1290141/">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">O nama</div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h5 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      o_nama: `Gradska knjižnica Rijeka središnja je narodna knjižnica grada
      Rijeke i matična knjižnica za narodne i školske knjižnice Primorsko-
      goranske županije. Ona je informacijsko, obrazovno, kulturno,
      komunikacijsko i socijalno središte Rijeke i okolice usmjereno prema novom
      stvaralaštvu, održivom razvoju i kvaliteti razvoja zajednice i čitateljske
      kulture.`,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
