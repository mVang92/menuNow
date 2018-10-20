import axios from "axios";

export default {
  
  getMenu: id => axios.get(`/api/menu/${id}`),
  createMenu: (user, data) => {
    // console.log('HIT THIS ROUTE')
    // Won't work if they enter more than 3 submenus
    return (
      axios.post(`/api/menu`, {
        submenu: [
          data[0],
          data[1],
          data[2]
        ],
        creator: user
      })
      //.then(console.log("MENU CREATED"))
      .catch(error => { console.log(error) })
    )
  },
  save: data => {
    // console.log(data)
    return (
      axios.post(`/api/item`, {
        _creator: data.user,
        name: data.name,
        ing: data.ing,
        desc: data.desc,
        price: data.price,
        note: data.note
      })
      .catch(error => { console.log(error) })
    );
  },
  update: (id, data) => {
    // console.log(id)
    // console.log(data)
    // console.log(`I'm inside the update route on utils/API.js`);
    return (
      axios.put(`/api/menu/${id}`, data)
    )
  },
  updateStatus: (id, data) => {
    // console.log(id)
    // console.log(data)
    // console.log(`I'm inside the changeStatus route on utils/API.js`);
    return (
      axios.put(`/api/menu/status/${id}`, data)
    )
  },
  delete: id => axios.delete(`/api/item/${id}`)
};
