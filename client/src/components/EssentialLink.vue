<template>
  <q-item clickable tag="span" @click="changeView(view)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label class="text-white" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  methods: {
    changeView(view) {
      if (view === "Search" || "How to" || "About Us") {
        this.$store.commit("changeView", view);
      }
      if (view === "Bookings") {
        this.$store.dispatch("getBookings");
      }
      if (view === "Chats") {
        const payload = {
          id: this.$store.state.id,
          nextPage: view
        };
        if (this.$store.state.userType === "traveller") {
          this.$store.dispatch("getTravellerChats", payload);
        } else {
          this.$store.dispatch("getGuideChats", payload);
        }
      }
      this.$emit("clicked");
    }
  },
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    view: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
