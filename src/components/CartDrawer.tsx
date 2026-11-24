import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  // Format cart contents into a single unified WhatsApp enquiry message!
  const buildCartWhatsAppMessage = () => {
    let msg = `Hello NOJUNK!\n\nI have created an enquiry for the following treats from your website:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name} (${item.variant}) x ${item.quantity}`;
      if (item.product.price) {
        msg += ` - approx ₹${item.product.price * item.quantity}`;
      }
      msg += `\n`;
    });
    msg += `\nPlease confirm availability, packaging options, and dispatch details.\n\nThank you!`;
    return msg;
  };

  const whatsappUrl = buildWhatsAppUrl(buildCartWhatsAppMessage());

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 bottom-0 w-[90%] max-w-md bg-[#FDFBF7] z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-nojunk-brown/15 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-nojunk-caramel" />
            <h3 className="font-serif text-lg font-bold text-nojunk-dark">
              Enquiry Basket ({items.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close basket"
            className="p-1 rounded-full text-nojunk-brown hover:bg-nojunk-parchment"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-nojunk-brown">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-base font-bold text-nojunk-dark">
                Your basket is empty
              </h4>
              <p className="text-xs text-nojunk-brown/70 max-w-xs mx-auto">
                Explore our wholesome nuts, stuffed Medjool dates, and artisanal chocolates.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl bg-nojunk-dark text-white text-xs font-semibold hover:bg-nojunk-chocolate transition-colors"
                >
                  Browse Treats
                </button>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant}`}
                className="bg-white p-3 rounded-xl border border-nojunk-brown/15 shadow-2xs flex items-center gap-3"
              >
                <div className="w-14 h-14 rounded-lg bg-amber-50/50 p-1 shrink-0 flex items-center justify-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="font-serif text-xs sm:text-sm font-bold text-nojunk-dark truncate">
                    {item.product.name}
                  </h5>
                  <p className="text-[11px] text-nojunk-caramel font-medium">
                    Pack: {item.variant}
                  </p>
                  {item.product.price && (
                    <p className="text-xs font-bold text-nojunk-dark">
                      ₹{item.product.price}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* Quantity controls */}
                  <div className="flex items-center border border-nojunk-brown/20 rounded-lg overflow-hidden bg-nojunk-parchment">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.variant, -1)}
                      className="p-1 hover:bg-amber-100 text-nojunk-dark"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-2 text-nojunk-dark">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.variant, 1)}
                      className="p-1 hover:bg-amber-100 text-nojunk-dark"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id, item.variant)}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with WhatsApp CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-nojunk-brown/15 bg-white space-y-3">
            <div className="flex items-center justify-between text-xs text-nojunk-brown">
              <span>Items Selected: {items.reduce((s, i) => s + i.quantity, 0)}</span>
              <button
                type="button"
                onClick={clearCart}
                className="text-rose-600 hover:underline font-medium"
              >
                Clear All
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Enquiry via WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-nojunk-brown/70">
              Orders and pack customization are confirmed directly with K. Neelima.
            </p>
          </div>
        )}
      </aside>
    </>
  );
};
