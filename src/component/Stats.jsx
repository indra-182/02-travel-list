function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );

  const totalItems = items.length || 0;
  const totalItemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedPercentage =
    Math.round((totalItemsPacked / totalItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {itemsPackedPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItems} items on your list, and you already packed 
          ${totalItemsPacked} (${itemsPackedPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
