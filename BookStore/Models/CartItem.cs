using System;
using System.Collections.Generic;

#nullable disable

namespace BookStore.Models
{
    public partial class CartItem
    {
        public int CartItemId { get; set; }
        public string CartId { get; set; }
        public string UserId { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
    }
}
