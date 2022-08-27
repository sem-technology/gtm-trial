
const loadNativeScript = (path: string) => {
  const script = document.createElement("script");
  script.src = path;
  document.head.appendChild(script);
};

const loadNativeScripts = (paths: string[]) => {
  paths.forEach((path: string) => loadNativeScript(path));
};

(() => {
  console.log("load");
  const w = window as any;
  loadNativeScripts([
    // "/js/jquery/jquery-2.2.4.min.js",
    "/js/popper.min.js",
    "/js/bootstrap.min.js",
    "/js/plugins.js",
    "/js/classy-nav.min.js",
    "/js/active.js",
  ]);

  if (location.pathname.includes("/configure/")) {
    if (localStorage.getItem('container_id')) {
      document.forms[1].container_id.value = localStorage.getItem('container_id');
    }
    if (localStorage.getItem('datalayer_name')) {
      document.forms[1].datalayer_name.value = localStorage.getItem('datalayer_name');
    }
    if (localStorage.getItem('view_item_page')) {
      document.forms[1].view_item_page.value = localStorage.getItem('view_item_page');
    }
    if (localStorage.getItem('purchase_page')) {
      document.forms[1].purchase_page.value = localStorage.getItem('purchase_page');
    }
    if (localStorage.getItem('all_page')) {
      document.forms[1].all_page.value = localStorage.getItem('all_page');
    }
    document.querySelector('.config_area form input[type="button"]')?.addEventListener("click", () => {
      localStorage.setItem('container_id', document.forms[1].container_id.value);
      localStorage.setItem('datalayer_name', document.forms[1].datalayer_name.value);
      localStorage.setItem('view_item_page', document.forms[1].view_item_page.value);
      localStorage.setItem('purchase_page', document.forms[1].purchase_page.value);
      localStorage.setItem('all_page', document.forms[1].all_page.value);

      w.alert("設定内容を保存しました。");
    });
  }

  // タグマネージャーのスクリプト読み込みを行う。
  if (localStorage.getItem('container_id')) {
    const datalayer_name = localStorage.getItem('datalayer_name') || "dataLayer";
    w[datalayer_name] = w[datalayer_name] || [];

    if (localStorage.getItem('all_page')) {
      eval(localStorage.getItem('all_page') || "");
    }
    if (localStorage.getItem('view_item_page') && location.pathname.includes('/goods/P')) {
      eval(localStorage.getItem('view_item_page') || "");
    }
    if (localStorage.getItem('purchase_page') && location.pathname.includes('/order/complete/')) {
      eval(localStorage.getItem('purchase_page') || "");
    }

    (function(w: any,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f: any=d.getElementsByTagName(s)[0],
    j: any=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script', datalayer_name, localStorage.getItem('container_id'));
  }
})();
