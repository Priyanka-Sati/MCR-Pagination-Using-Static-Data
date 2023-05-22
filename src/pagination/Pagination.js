import React, { useState } from "react";
import { products } from "../localFiles/product";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./style.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;
  const startIdx = (currentPage - 1) * itemPerPage;
  const endIdx = startIdx + itemPerPage;

  console.log(startIdx + " " + endIdx);

  const currentitems = products.slice(startIdx, endIdx);
  const totalPages = Math.ceil(products.length / itemPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <div className="allProducts">
        {currentitems.map((item) => {
          return (
            <Card sx={{ width: 300 }} key={item.id}>
              <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                alt="green iguana"
                height="140"
                image={item.icon}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {`$ ${item.price}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>

      <div className="pagesNumber">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            {"<"}
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}

        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
