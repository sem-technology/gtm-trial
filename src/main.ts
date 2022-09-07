
const loadNativeScript = (path: string) => {
  const script = document.createElement("script");
  script.src = path;
  console.log("load javascript: " + path);
  document.head.appendChild(script);
};

const loadNativeScripts = (paths: string[]) => {
  paths.forEach((path: string) => loadNativeScript(path));
};

(() => {
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
    if (localStorage.getItem('gtag_id_01')) {
      document.forms[1].gtag_id_01.value = localStorage.getItem('gtag_id_01');
    }
    if (localStorage.getItem('gtag_id_02')) {
      document.forms[1].gtag_id_01.value = localStorage.getItem('gtag_id_02');
    }
    if (localStorage.getItem('gtag_id_03')) {
      document.forms[1].gtag_id_01.value = localStorage.getItem('gtag_id_03');
    }
    if (localStorage.getItem('gtag_id_04')) {
      document.forms[1].gtag_id_01.value = localStorage.getItem('gtag_id_04');
    }
    if (localStorage.getItem('gtag_id_05')) {
      document.forms[1].gtag_id_01.value = localStorage.getItem('gtag_id_05');
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
      localStorage.setItem('gtag_id_01', document.forms[1].gtag_id_01.value);
      localStorage.setItem('gtag_id_02', document.forms[1].gtag_id_02.value);
      localStorage.setItem('gtag_id_03', document.forms[1].gtag_id_03.value);
      localStorage.setItem('gtag_id_04', document.forms[1].gtag_id_04.value);
      localStorage.setItem('gtag_id_05', document.forms[1].gtag_id_05.value);

      w.alert("設定内容を保存しました。");
    });
  }

  const gtagIds: string[] = [];
  if (localStorage.getItem('gtag_id_01')) {
    gtagIds.push(localStorage.getItem('gtag_id_01') || "");
  }
  if (localStorage.getItem('gtag_id_02')) {
    gtagIds.push(localStorage.getItem('gtag_id_02') || "");
  }
  if (localStorage.getItem('gtag_id_03')) {
    gtagIds.push(localStorage.getItem('gtag_id_03') || "");
  }
  if (localStorage.getItem('gtag_id_04')) {
    gtagIds.push(localStorage.getItem('gtag_id_04') || "");
  }
  if (localStorage.getItem('gtag_id_05')) {
    gtagIds.push(localStorage.getItem('gtag_id_05') || "");
  }

  if (gtagIds.length > 0) {
    loadNativeScripts(gtagIds.map((id: string): string => (
      "https://www.googletagmanager.com/gtag/js?id=" + id
    )));
  }
  w.dataLayer = w.dataLayer || [];
  function gtag(_: string, __: any) { w.dataLayer.push(arguments); }
  if (gtagIds.length > 0) {
    gtag("js", new Date());
  }

  // タグマネージャーのスクリプト読み込みを行う。
  if (localStorage.getItem('container_id')) {
    const datalayer_name = localStorage.getItem('datalayer_name') || "dataLayer";
    w[datalayer_name] = w[datalayer_name] || [];
  }

  if (localStorage.getItem('view_item_page') && location.pathname.includes('/goods/P')) {
    eval(localStorage.getItem('view_item_page') || "");
  }
  if (localStorage.getItem('purchase_page') && location.pathname.includes('/order/complete/')) {
    eval(localStorage.getItem('purchase_page') || "");
  }
  if (localStorage.getItem('all_page')) {
    eval(localStorage.getItem('all_page') || "");
  }

  // タグマネージャーのスクリプト読み込みを行う。
  if (localStorage.getItem('container_id')) {
    const datalayer_name = localStorage.getItem('datalayer_name') || "dataLayer";
    (function(w: any,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f: any=d.getElementsByTagName(s)[0],
    j: any=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script', datalayer_name, localStorage.getItem('container_id'));
    console.log("Load Google Tag Manager: " + localStorage.getItem('container_id'))
  }
})();
