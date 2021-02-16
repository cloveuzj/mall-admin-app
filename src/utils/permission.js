// 存储的是角色对应的路由对象
const roleToRoute = {
  coustomer: [
    {
      name: 'productAdd',
    },
    {
      name: 'productList',
    },
  ],
  admin: [
    {
      name: 'productAdd',
    },
    {
      name: 'productList',
    },
    {
      name: 'Catagoy',
    },
  ],
};

export default function getMenu(role, routes) {
  console.log(role);
  const allowMenu = roleToRoute[role].map((item) => item.name);
  const resultMenu = routes.filter((item) => {
    const c = item;
    c.children = item.children.filter((r) => allowMenu.indexOf(r.name) !== -1);
    return true;
  });
  return resultMenu;
}
