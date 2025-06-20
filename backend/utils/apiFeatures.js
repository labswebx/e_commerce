class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Exclude fields that are NOT meant for filtering
    const removeFields = ["keyword", "page", "limit", "sort"];
    removeFields.forEach((key) => delete queryCopy[key]);

    // Advanced filter conversion (e.g., price[gte] => $gte)
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
  sort(defaultSort = { createdAt: -1 }) {
    if (this.queryStr.sort) {
      const sortField = this.queryStr.sort;
      let sortQuery = {};

      switch (sortField) {
        case "price-asc":
          sortQuery = { price: 1 };
          break;
        case "price-desc":
          sortQuery = { price: -1 };
          break;
        case "name":
          sortQuery = { name: 1 };
          break;
        case "rating":
          sortQuery = { rating: -1 };
          break;
        default:
          sortQuery = defaultSort;
      }

      this.query = this.query.sort(sortQuery);
    } else {
      this.query = this.query.sort(defaultSort);
    }

    return this;
  }
}

module.exports = ApiFeatures;
