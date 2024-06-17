const editorTemplate = `<button id="addProduct" class="button">Add Product</button>`;

const productItemsTemplate = _.template(`
<% _.forEach(products, function(item) { %>
  <div style="margin-left: 5px"  id="product-item" data-uuid='<%= item.id %>' data-title="<%= item.title %>" data-price="<%= item.price %>" data-image="<%= item.image %>" >
    <img style="border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; max-width: 200px;" src="<%= item.image %>" alt="" />
    
    <div style="padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem;">
      <p style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 400; color: #4b5563;"><%= item.title %></p>
    </div>
  </div>
<% }); %>
`);


const modalTemplate = function (data) {
  return `
  <div class="modal" id="product_library_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Products Library</h3>
          <button class="close" onclick="hideModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="search-box">
            <input type="text" class="form-control" placeholder="Search by name" id="search-bar" style="width: 78%" />
            <button id="search-btn" class="button" style="width: 20%">Search</button>
          </div>
          <div class="products-list">
            ${productItemsTemplate(data)}
          </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
`;
};



const toolTemplate = function (values, isViewer = false) {
  if (values.productDescription) {
    return `
      <Span style="color: black; padding: 5px">${values.productDescription}</span>
      ${isViewer ? modalTemplate({ products: values.data.products }) : ''}
    `;
  } else {
    values.productDescription = 'Click here to add your form!'
    return `
    <div class="product-card">
      <Span style="color: black; padding: 10px">${values.productDescription}</span>
      </div>
      ${isViewer ? modalTemplate({ products: values.data.products }) : ''}
    `;
  }
  //   return `  
  //   <div class="product-card">
  //   <p style="color: black">${values.productDescription}</p>
  //   <p style="color: black">Click here to add your form!</p>
  // </div>
  // ${isViewer ? modalTemplate({ products: values.data.products }) : ''}
  // `;
};

const showModal = function () {
  const modal = document.getElementById('product_library_modal');
  modal.classList.add('show');
};

const hideModal = function () {
  const modal = document.getElementById('product_library_modal');
  modal.classList.remove('show');
};








unlayer.registerPropertyEditor({
  name: 'product_library',
  layout: 'bottom',
  Widget: unlayer.createWidget({
    render(value, updateValue, data) {
      return editorTemplate;
    },
    mount(node, value, updateValue, data) {
      var addButton = node.querySelector('#addProduct');
      addButton.onclick = function () {
        showModal();
        setTimeout(() => {
          // We are using event bubling to capture clicked item instead of registering click event on all product items.
          var selectButton = document.querySelector('.products-list');
          if (!selectButton) return;
          selectButton.onclick = function (e) {
            if (e.target.id === 'product-item') {
              // If user clicks on product item
              // Find selected item from products list
              const selectedProduct = data.products.find(
                (item) => item.id === parseInt(e.target.dataset.uuid)
              );
              updateValue({ selected: selectedProduct });
            } else {
              // If user click on child of product item (e.g. title, price, image or desctiption)
              const parent = e.target.parentElement;
              if (parent && parent.id !== 'product-item') return;
              const selectedProduct = data.products.find(
                (item) => item.id === parseInt(parent.dataset.uuid)
              );
              updateValue({ selected: selectedProduct });
            }
            hideModal();
            // This is a hack to close property editor right bar on selecting an item from products list.
            var outerBody = document.querySelector('#u_body');
            outerBody.click();
          };
          /* Register event listeners for search */
          var searchBar = document.querySelector('#search-bar');
          var searchButton = document.querySelector('#search-btn');
          searchButton.onclick = function (e) {
            const list = document.querySelector(
              '#product_library_modal .products-list'
            );
            let filteredItem;
            let productsListHtml;
            if (list && data && data.products) {
              if (searchBar.value === '') {
                productsListHtml = productItemsTemplate({
                  products: data.products,
                });
              } else {
                filteredItem = data.products.filter((item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchBar.value.toLowerCase())
                );
                productsListHtml = productItemsTemplate({
                  products: filteredItem,
                });
              }
              list.innerHTML = productsListHtml;
            }
          };
        }, 200);
      };
    },
  }),
});

unlayer.registerTool({
  name: 'product_tool',
  label: 'Product',
  icon: 'fa-tag',
  supportedDisplayModes: ['web', 'email'],
  options: {
    productContent: {
      title: 'Product Content',
      position: 1,
      options: {
        productLibrary: {
          label: 'Add Product from store',
          defaultValue: '',
          widget: 'product_library',
        },
        // productImage: {
        //   label: 'Product Image',
        //   defaultValue: {
        //     url: 'https://s3.amazonaws.com/unroll-images-production/projects%2F6553%2F1604576441796-339575',
        //   },
        //   widget: 'image',
        // },
        // productTitle: {
        //   label: 'Product Title',
        //   defaultValue: 'Product Title',
        //   widget: 'text',
        // },
        // productTitleColor: {
        //   label: 'Product Title Color',
        //   defaultValue: '#000000',
        //   widget: 'color_picker',
        // },
        // productDescription: {
        //   label: 'Product Description',
        //   defaultValue:
        //     'Click here to add your form!',
        //   widget: 'rich_text',
        // },
        // productPrice: {
        //   label: 'Product Price',
        //   defaultValue: '7.99',
        //   widget: 'text',
        // },
        // productPriceColor: {
        //   label: 'Product Price Color',
        //   defaultValue: '#000000',
        //   widget: 'color_picker',
        // },
        // productPriceBackgroundColor: {
        //   label: 'Product Price Background',
        //   defaultValue: '#ffffff',
        //   widget: 'color_picker',
        // },
        // productCTA: {
        //   label: 'Button Name',
        //   defaultValue: 'Buy Now',
        //   widget: 'text',
        // },
        // productCTAColor: {
        //   label: 'Button Color',
        //   defaultValue: '#007bff',
        //   widget: 'color_picker',
        // },
        // productCTATextColor: {
        //   label: 'Button Text Color',
        //   defaultValue: '#ffffff',
        //   widget: 'color_picker',
        // },
        // productCTAAction: {
        //   label: 'Action Type',
        //   defaultValue: {
        //     name: 'web',
        //     values: {
        //       href: 'http://google.com',
        //       target: '_blank',
        //     },
        //   },
        //   widget: 'link',
        // },
      },
    },
  },
  transformer: (values, source) => {
    const { name, value, data } = source;
    // Transform the values here
    // We will update selected values in property editor here
    let newValues;
    if (name === 'productLibrary') {
      const dataChanged = values.productTitle !== value.selected.title

      newValues = {
        ...values,
        productTitle: value.selected.title,
        productPrice: value.selected.price,
        productDescription: value.selected.description,
        productImage: {
          url: value.selected.image,
        },
        dataChanged: dataChanged // Thêm thuộc tính dataChanged
      };
    } else {
      newValues = {
        ...values,
        dataChanged: false // Đặt lại thành false nếu không phải productLibrary
      };
    }

    return newValues;
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return toolTemplate(values, true);
      },
    }),
    exporters: {
      web: function (values) {
        return toolTemplate(values);
      },
      email: function (values) {
        return toolTemplate(values);
      },
    },
    head: {
      // As we need custom styling in export as well that's why we put those styles here

      js: function (values) { },
    },
  },
});