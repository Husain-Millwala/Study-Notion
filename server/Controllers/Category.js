const Category = require("../Models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(401).json({
        success: false,
        message: "All feilds are required",
      });
    }

    const CategorysDetails = await Category.create({
      name: name,
      description: description,
    });

    console.log(CategorysDetails);
    return res.status(200).jsom({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    return res.status(500).jsom({
      success: false,
      message: error.message,
    });
  }
};

exports.showAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find(
      {},
      { name: true, description: true }
    );
    res.status(200).json({
      success: true,
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).jsom({
      success: false,
      message: error.message,
    });
  }
};

//categoryPageDetails

exports.createPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;

    const selectedCategory = await Category.findById(categoryId)
      .populate("courses")
      .exec();

    if (!selectedCategory) {
      return res.status(404).jsom({
        success: false,
        message: "Data not found",
      });
    }

    const differentCategories = await Category.find({
      _id: { $ne: categoryId },
    })
      .populate("courses")
      .exec();

    return res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategories,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
