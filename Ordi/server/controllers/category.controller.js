import { prisma } from '../config/db.js';

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { items: true },
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories.' });
  }
};

// Add a category
export const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add category.' });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updated = await prisma.category.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update category.' });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.category.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete category.' });
  }
};
