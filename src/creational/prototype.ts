const player = {
  movePlayerTo() {
    return "moved";
  },
};

const john = Object.create(player, {
  name: { value: "John" },
});

export default john;
