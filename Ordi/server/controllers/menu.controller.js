import { prisma } from '../config/db.js';

// Get all menu items (Customer)
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany({
      where: { available: true },
      include: { category: true },
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items.' });
  }
};

// Admin: Add new menu item
export const addMenuItem = async (req, res) => {
  const { name, description, price, available, categoryId } = req.body;
  try {
    const newItem = await prisma.menuItem.create({
      data: { name, description, price, available, categoryId },
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create menu item.' });
  }
};

// Admin: Update a menu item
export const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, available, categoryId } = req.body;
  try {
    const updatedItem = await prisma.menuItem.update({
      where: { id: parseInt(id) },
      data: { name, description, price, available, categoryId },
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update menu item.' });
  }
};

// Admin: Delete a menu item
export const deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menuItem.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Menu item deleted.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete menu item.' });
  }
};
