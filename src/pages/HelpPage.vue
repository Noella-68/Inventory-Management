<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['Hello, my name is Noella and I will be helping you today. How can I assist?']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:name>me</template>
        <template v-slot:stamp>7 minutes ago</template>
        <template v-slot:avatar>

        </template>
      </q-chat-message>

      <q-chat-message
        bg-color="turquoise"
      >
        <template v-slot:name>Aime</template>
        <template v-slot:avatar>

        </template>

        <div>
          Hello, my name is Aime one of your Clients. I am having issues fetching my products...

        </div>

        <q-spinner-dots size="2rem" />
      </q-chat-message>



      <q-chat-message
        :text="['I am sorry to here Aime. Could you please share a screenshot of the error you are getting']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:name>me</template>
        <template v-slot:stamp>7 minutes ago</template>
        <template v-slot:avatar>

        </template>
      </q-chat-message>


      <q-chat-message
        bg-color="turquoise"
      >
        <template v-slot:name>Aime</template>
        <template v-slot:avatar>

        </template>

        <div>
          Sure Noella, Here is a screenshot... Your help will highly be appreciated
        </div>

        <q-separator></q-separator>

        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <img
            src="/images/Image 2024-09-24 at 1.29.13 AM.jpeg"
            style="height: 500px"
            class="q-ml-sm"
            alt=""
          />
        </div>

      </q-chat-message>

    </div>
  </div>
</template>

<style lang="sass">
.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
<script setup lang="ts">
</script>
