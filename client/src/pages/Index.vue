<template>
  <q-page class="flex flex-center">
    <transition name="fade">
      <Search v-if="this.$store.state.currentView === 'Search'" />
      <SearchResults
        v-if="this.$store.state.currentView === 'Search Results'"
      />
      <Bookings v-if="this.$store.state.currentView === 'Bookings'" />
      <SelectedProfile
        v-if="this.$store.state.currentView === 'Guide Profile'"
      />
      <MyProfile v-if="this.$store.state.currentView === 'My Profile'" />
      <EditProfile v-if="this.$store.state.currentView === 'EditProfile'" />
      <Chats v-if="this.$store.state.currentView === 'Chats'" />
      <Messages v-if="this.$store.state.currentView === 'Messages'" />
      <HowTo v-if="this.$store.state.currentView === 'How to'" />
      <AboutUs v-if="this.$store.state.currentView === 'About Us'" />
      <Login v-if="this.$store.state.currentView === 'Login'" />
      <Logout v-if="this.$store.state.currentView === 'Logout'" />
      <Registration v-if="this.$store.state.currentView === 'Registration'" />
    </transition>
  </q-page>
</template>

<script>
import Search from "../components/Search.vue";
import SearchResults from "../components/SearchResults.vue";
import Bookings from "../components/Bookings.vue";
import SelectedProfile from "../components/SelectedProfile.vue";
import MyProfile from "../components/MyProfile.vue";
import EditProfile from "../components/EditProfile.vue";
import Messages from "../components/Messages.vue";
import Chats from "../components/Chats.vue";
import HowTo from "../components/HowTo.vue";
import AboutUs from "../components/AboutUs.vue";
import Login from "../components/Login.vue";
import Logout from "../components/Logout.vue";
import Registration from "../components/Registration.vue";

export default {
  name: "PageIndex",
  components: {
    Search,
    SearchResults,
    Bookings,
    SelectedProfile,
    MyProfile,
    EditProfile,
    Chats,
    Messages,
    HowTo,
    AboutUs,
    Login,
    Logout,
    Registration
  },
  methods: {
    whatever() {
      this.$store.commit("userView");
    },
    asyncWhatever() {
      this.$store.dispatch("asyncSomething");
    }
  }
};
</script>
