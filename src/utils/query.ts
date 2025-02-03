export const query =`*[_type == "product"]{
_id,
title,
"imageUrl": productImage.asset->url,
price,
tags,
description,
discountPercentage,
isNew,
}`