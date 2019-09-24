import axios from "axios";

export default {
  // Gets all auction items
  getItems: function() {
    return axios.get("/api/auctionitems");
  },
  // Gets the auction item with the given id
  getItem: function(id) {
    return axios.get("/api/auctionitems/" + id);
  },
  // Deletes the auction item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/auctionitems/" + id);
  },
  // Saves a auction item to the database
  saveItem: function(itemData) {
    return axios.post("/api/auctionitems", itemData);
  },

  updateBid: function(id) {
    return axios.put("/api/auctionitems/" + id)
  }
};
