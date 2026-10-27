(function () {
  "use strict";

  function isInPagesFolder() {
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    return path.includes("/pages/");
  }

  function normalizeComponentPaths(rootEl) {
    const inPages = isInPagesFolder();
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    let currentPage = path.split("/").pop() || "index.html";
    if (!currentPage.endsWith(".html")) {
      currentPage = "index.html";
    }

    rootEl.querySelectorAll("[data-logo-img]").forEach(function (img) {
      const rawSrc = img.getAttribute("data-logo-img");
      img.setAttribute("src", inPages ? "../" + rawSrc : rawSrc);
    });

    rootEl.querySelectorAll("[data-page-link]").forEach(function (link) {
      const rawHref = link.getAttribute("data-page-link");
      if (inPages) {
        if (rawHref === "index.html") {
          link.setAttribute("href", "../index.html");
        } else if (rawHref.startsWith("pages/")) {
          link.setAttribute("href", rawHref.replace(/^pages\//, ""));
        } else {
          link.setAttribute("href", rawHref);
        }
      } else {
        link.setAttribute("href", rawHref);
      }
    });

    rootEl.querySelectorAll("li[data-nav]").forEach(function (li) {
      const navTarget = li.getAttribute("data-nav").toLowerCase();
      if (navTarget === currentPage) {
        li.classList.add("current");
      } else {
        li.classList.remove("current");
      }
    });
  }

  async function loadComponent(container, url) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        container.innerHTML = await res.text();
        return true;
      }
    } catch (_) {}
    return false;
  }

  async function initCommonComponents() {
    const headerContainer = document.getElementById("header-component");
    const footerContainer = document.getElementById("footer-component");
    const inPages = isInPagesFolder();

    if (headerContainer) {
      await loadComponent(
        headerContainer,
        inPages ? "components/header.html" : "pages/components/header.html",
      );
      normalizeComponentPaths(headerContainer);
    } else {
      normalizeComponentPaths(document);
    }

    if (footerContainer) {
      await loadComponent(
        footerContainer,
        inPages ? "components/footer.html" : "pages/components/footer.html",
      );
      normalizeComponentPaths(footerContainer);
    }

    initHeaderAndScrollControls();
    initScrollReveal();
  }

  function initHeaderAndScrollControls() {
    const mainHeader =
      document.getElementById("siteMainHeader") ||
      document.querySelector(".main_header");
    const scrollTopBtn =
      document.getElementById("scrollTopBtn") ||
      document.querySelector(".scroll-top");
    const openBtn =
      document.getElementById("mobileNavOpenBtn") ||
      document.querySelector(".mobile-nav-toggler");
    const closeBtn =
      document.getElementById("mobileNavCloseBtn") ||
      document.querySelector(".mobile-menu .close-btn");
    const mobileMenu =
      document.getElementById("mobileMenuOverlay") ||
      document.querySelector(".mobile-menu");

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (mainHeader) {
        if (scrollY > 80) {
          mainHeader.classList.add("is-scrolled");
        } else {
          mainHeader.classList.remove("is-scrolled");
        }
      }
      if (scrollTopBtn) {
        if (scrollY > 250) {
          scrollTopBtn.classList.add("open");
        } else {
          scrollTopBtn.classList.remove("open");
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (openBtn && mobileMenu) {
      openBtn.addEventListener("click", function () {
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    }

    function closeMobileMenu() {
      if (mobileMenu) {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeMobileMenu);
    }

    if (mobileMenu) {
      mobileMenu.querySelectorAll(".navigation a").forEach(function (a) {
        a.addEventListener("click", closeMobileMenu);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll(".count_text[data-stop]");
    if (!counters.length) return;

    const animateCounter = function (el) {
      if (el.dataset.animated === "true") return;
      el.dataset.animated = "true";
      const target = parseInt(el.getAttribute("data-stop"), 10) || 0;
      const duration = parseInt(el.getAttribute("data-speed"), 10) || 1500;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString();
        }
      }
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 },
      );

      counters.forEach(function (c) {
        observer.observe(c);
      });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /**
   * Evaluate password strength criteria:
   * Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
   */
  function checkPasswordCriteria(val) {
    const rules = {
      length: val.length >= 8,
      upper: /[A-Z]/.test(val),
      lower: /[a-z]/.test(val),
      number: /[0-9]/.test(val),
      special: /[^A-Za-z0-9\s]/.test(val),
    };
    const passedCount = Object.values(rules).filter(Boolean).length;
    return {
      rules: rules,
      passedCount: passedCount,
      isStrong: passedCount === 5,
    };
  }

  /**
   * Update Password Strength UI Box & Custom Validity
   */
  function updatePasswordStrengthUI(inputEl) {
    const targetId = inputEl.getAttribute("data-strength-target");
    const box = targetId ? document.getElementById(targetId) : null;
    const val = inputEl.value || "";
    const res = checkPasswordCriteria(val);

    if (box) {
      const fill = box.querySelector(".strength_meter_fill");
      const statusText = box.querySelector(".strength_status_text");

      Object.keys(res.rules).forEach(function (ruleKey) {
        const li = box.querySelector(`li[data-rule="${ruleKey}"]`);
        if (li) {
          li.classList.toggle("valid", res.rules[ruleKey]);
        }
      });

      if (fill && statusText) {
        fill.classList.remove("weak", "medium", "strong");
        if (!val.length) {
          statusText.textContent = "Enter Password";
          statusText.className = "strength_status_text text-muted";
        } else if (res.passedCount <= 2) {
          fill.classList.add("weak");
          statusText.textContent = "Weak Password";
          statusText.className = "strength_status_text text-danger";
        } else if (res.passedCount <= 4) {
          fill.classList.add("medium");
          statusText.textContent = "Medium (Needs all 5 rules)";
          statusText.className = "strength_status_text text-warning";
        } else {
          fill.classList.add("strong");
          statusText.textContent = "Strong Password";
          statusText.className = "strength_status_text text-success";
        }
      }
    }

    if (!val.length) {
      inputEl.setCustomValidity("Password is required.");
    } else if (!res.isStrong) {
      inputEl.setCustomValidity(
        "Weak password: Must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      );
    } else {
      inputEl.setCustomValidity("");
    }

    return res.isStrong;
  }

  /**
   * Strict Form Validation & Keystroke Blocking
   */
  function initStrictFormRestrictions() {
    const todayObj = new Date();
    const yyyy = todayObj.getFullYear();
    const mm = String(todayObj.getMonth() + 1).padStart(2, "0");
    const dd = String(todayObj.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    // Ensure all inputs/selects/textareas inside forms are required
    document
      .querySelectorAll("form input, form select, form textarea")
      .forEach(function (field) {
        if (
          field.type !== "hidden" &&
          field.type !== "submit" &&
          field.type !== "button"
        ) {
          field.setAttribute("required", "required");
        }
      });

    // 1A. STRICT Register Username Field: ONLY Letters [a-zA-Z] allowed (NO numbers, NO special chars, NO SPACES)
    const strictUsernameFields = document.querySelectorAll(
      'input[data-validation="strict-username"], input.strict-username-field',
    );

    strictUsernameFields.forEach(function (input) {
      input.addEventListener("keydown", function (e) {
        if (
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          allowedControlKeys.includes(e.key)
        ) {
          return;
        }
        // Block spacebar, numbers, and any non-alphabet key immediately
        if (
          e.key === " " ||
          e.code === "Space" ||
          (e.key.length === 1 && !/^[a-zA-Z]$/.test(e.key))
        ) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (e.data && !/^[a-zA-Z]+$/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^a-zA-Z]/g, "");
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^a-zA-Z]/g, "");
        const start = this.selectionStart || 0;
        const end = this.selectionEnd || 0;
        this.value =
          this.value.slice(0, start) + cleaned + this.value.slice(end);
      });
    });

    // 1B. General Full Name / Username Fields (on other pages): Letters & spaces only (NO numbers or special chars)
    const generalUsernameFields = document.querySelectorAll(
      'input[data-validation="username"], input.username-field',
    );

    generalUsernameFields.forEach(function (input) {
      if (
        input.classList.contains("strict-username-field") ||
        input.getAttribute("data-validation") === "strict-username"
      ) {
        return;
      }

      input.addEventListener("keydown", function (e) {
        if (
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          allowedControlKeys.includes(e.key)
        ) {
          return;
        }
        if (e.key.length === 1 && !/^[a-zA-Z\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (e.data && !/^[a-zA-Z\s]+$/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^a-zA-Z\s]/g, "");
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^a-zA-Z\s]/g, "");
        const start = this.selectionStart || 0;
        const end = this.selectionEnd || 0;
        this.value =
          this.value.slice(0, start) + cleaned + this.value.slice(end);
      });
    });

    // 2. Number / Phone Fields: ONLY Digits (0-9) allowed
    const numberFields = document.querySelectorAll(
      'input[data-validation="number"], input.number-field, input[type="tel"], input[type="number"]',
    );

    numberFields.forEach(function (input) {
      input.addEventListener("keydown", function (e) {
        if (
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          allowedControlKeys.includes(e.key)
        ) {
          return;
        }
        if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (e.data && !/^[0-9]+$/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^0-9]/g, "");
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^0-9]/g, "");
        const start = this.selectionStart || 0;
        const end = this.selectionEnd || 0;
        this.value =
          this.value.slice(0, start) + cleaned + this.value.slice(end);
      });
    });

    // 3. Date Fields: Disallow Past Dates
    const dateFields = document.querySelectorAll(
      'input[type="date"], input[data-validation="future-date"]',
    );
    dateFields.forEach(function (dateInput) {
      dateInput.setAttribute("min", todayStr);

      function validateFutureDate() {
        if (dateInput.value && dateInput.value < todayStr) {
          dateInput.setCustomValidity(
            "Past dates are not allowed. Please choose today or a future date.",
          );
          dateInput.value = todayStr;
        } else {
          dateInput.setCustomValidity("");
        }
      }

      dateInput.addEventListener("change", validateFutureDate);
      dateInput.addEventListener("input", validateFutureDate);
    });

    // 4. Password Visibility Toggle Buttons
    document.querySelectorAll("[data-toggle-password]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetId = btn.getAttribute("data-toggle-password");
        const passInput = document.getElementById(targetId);
        const icon = btn.querySelector("i");
        if (!passInput) return;

        if (passInput.type === "password") {
          passInput.type = "text";
          if (icon) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
          }
        } else {
          passInput.type = "password";
          if (icon) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
          }
        }
      });
    });

    // 5. Weak Password Validation on Login & Register Password Fields
    const strengthFields = document.querySelectorAll(
      ".password-strength-field",
    );
    strengthFields.forEach(function (passInput) {
      passInput.addEventListener("input", function () {
        const isStrong = updatePasswordStrengthUI(passInput);
        const errEl = document.getElementById(
          passInput.id === "loginPassword"
            ? "loginPasswordError"
            : "regPasswordError",
        );
        if (errEl) {
          if (passInput.value.length > 0 && !isStrong) {
            errEl.classList.add("show");
          } else {
            errEl.classList.remove("show");
          }
        }
      });
    });

    // 6. Register Confirm Password Match Validation
    const regPass = document.getElementById("regPassword");
    const regConfirmPass = document.getElementById("regConfirmPassword");
    const confirmStatus = document.getElementById("confirmMatchStatus");

    function validatePasswordMatch() {
      if (!regPass || !regConfirmPass) return true;
      const p1 = regPass.value;
      const p2 = regConfirmPass.value;

      if (!p2.length) {
        regConfirmPass.setCustomValidity("Please confirm your password.");
        if (confirmStatus) {
          confirmStatus.className = "confirm_match_msg";
          confirmStatus.textContent = "";
        }
        return false;
      }

      if (p1 !== p2) {
        regConfirmPass.setCustomValidity("Passwords do not match.");
        if (confirmStatus) {
          confirmStatus.className = "confirm_match_msg show match_err";
          confirmStatus.innerHTML =
            '<i class="fa-solid fa-circle-xmark me-1"></i> Passwords do not match';
        }
        return false;
      } else {
        regConfirmPass.setCustomValidity("");
        if (confirmStatus) {
          confirmStatus.className = "confirm_match_msg show match_ok";
          confirmStatus.innerHTML =
            '<i class="fa-solid fa-circle-check me-1"></i> Passwords match';
        }
        return true;
      }
    }

    if (regPass && regConfirmPass) {
      regPass.addEventListener("input", validatePasswordMatch);
      regConfirmPass.addEventListener("input", validatePasswordMatch);
    }

    // 7. Handle Login, Register & General Form Submissions
    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Specific Handler for Register Form (#portalRegisterForm)
        if (form.id === "portalRegisterForm") {
          const isPassStrong = regPass
            ? updatePasswordStrengthUI(regPass)
            : true;
          const regErr = document.getElementById("regPasswordError");
          if (!isPassStrong && regErr) {
            regErr.classList.add("show");
          }
          const isMatch = validatePasswordMatch();

          if (!form.checkValidity() || !isPassStrong || !isMatch) {
            form.reportValidity();
            return;
          }

          const regUsernameEl = document.getElementById("regUsername");
          const regRoleEl = document.getElementById("regRole");
          const regEmailEl = document.getElementById("regEmail");
          const regRoleVal = regRoleEl ? regRoleEl.value : "Student";
          const normalizedRegRole =
            regRoleVal === "Applicant" ? "Admissions" : regRoleVal;
          const regRoleLabel =
            regRoleEl && regRoleEl.options[regRoleEl.selectedIndex]
              ? regRoleEl.options[regRoleEl.selectedIndex].text.trim()
              : normalizedRegRole;

          try {
            const registeredData = {
              username: regUsernameEl ? regUsernameEl.value.trim() : "",
              role: normalizedRegRole,
              roleLabel: regRoleLabel,
              email: regEmailEl ? regEmailEl.value.trim() : "",
              registeredAt: new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
            localStorage.setItem(
              "stacklyRegisteredUser",
              JSON.stringify(registeredData),
            );
          } catch (_) {}

          const feedbackEl = document.getElementById("registerFeedbackBox");
          if (feedbackEl) {
            feedbackEl.innerHTML =
              '<i class="fa-solid fa-circle-check me-2"></i> Registration successful! Redirecting you to the Login page...';
            feedbackEl.classList.add("show");
          }

          setTimeout(function () {
            window.location.href = "login.html";
          }, 900);
          return;
        }

        // Specific Handler for Login Form (#portalLoginForm)
        if (form.id === "portalLoginForm") {
          const loginPass = document.getElementById("loginPassword");
          const isPassStrong = loginPass
            ? updatePasswordStrengthUI(loginPass)
            : true;
          const loginErr = document.getElementById("loginPasswordError");
          if (!isPassStrong && loginErr) {
            loginErr.classList.add("show");
          }

          if (!form.checkValidity() || !isPassStrong) {
            form.reportValidity();
            return;
          }

          const loginRoleEl = document.getElementById("loginRole");
          const loginEmailEl = document.getElementById("loginEmail");
          const loginRememberEl = document.getElementById("loginRemember");

          const selectedRole =
            loginRoleEl && loginRoleEl.value ? loginRoleEl.value : "Student";
          const selectedRoleLabel =
            loginRoleEl && loginRoleEl.options[loginRoleEl.selectedIndex]
              ? loginRoleEl.options[loginRoleEl.selectedIndex].text.trim()
              : selectedRole;
          const enteredEmail =
            loginEmailEl && loginEmailEl.value
              ? loginEmailEl.value.trim()
              : "scholar@stacklyuniversity.ac.uk";
          const passVal = loginPass && loginPass.value ? loginPass.value : "";
          const rememberChecked = loginRememberEl
            ? loginRememberEl.checked
            : true;

          // Derive display name from registered user (if matching email) or from email prefix
          let displayName = "";
          try {
            const regRaw = localStorage.getItem("stacklyRegisteredUser");
            if (regRaw) {
              const regObj = JSON.parse(regRaw);
              if (
                regObj &&
                regObj.username &&
                (!regObj.email ||
                  regObj.email.toLowerCase() === enteredEmail.toLowerCase())
              ) {
                displayName = regObj.username;
              }
            }
          } catch (_) {}

          if (!displayName) {
            const localPart = enteredEmail.split("@")[0] || "OxfordScholar";
            displayName = localPart
              .replace(/[._-]+/g, " ")
              .replace(/\b\w/g, function (c) {
                return c.toUpperCase();
              });
          }

          const sessionData = {
            role: selectedRole,
            roleLabel: selectedRoleLabel,
            email: enteredEmail,
            displayName: displayName,
            passwordStatus:
              "Verified Strong (" + passVal.length + " chars • 5/5 Rules)",
            rememberPolicy: rememberChecked
              ? "Trusted Device & Secure Session Confirmed"
              : "Standard Session",
            loginTime: new Date().toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            ssoId:
              "OXF-" +
              selectedRole.slice(0, 3).toUpperCase() +
              "-" +
              Math.floor(1000 + Math.random() * 9000),
          };

          try {
            localStorage.setItem(
              "stacklyPortalSession",
              JSON.stringify(sessionData),
            );
          } catch (_) {}

          const feedbackEl = document.getElementById("loginFeedbackBox");
          if (feedbackEl) {
            feedbackEl.innerHTML =
              '<i class="fa-solid fa-circle-check me-2"></i> Login verified for <strong>' +
              enteredEmail +
              "</strong> (" +
              selectedRole +
              ")! Redirecting to your Portal Dashboard...";
            feedbackEl.classList.add("show");
          }

          setTimeout(function () {
            window.location.href = isInPagesFolder()
              ? "dashboard.html"
              : "pages/dashboard.html";
          }, 750);
          return;
        }

        // General Portal Forms
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        window.location.href = isInPagesFolder()
          ? "404.html"
          : "pages/404.html";
      });
    });
  }

  function initFilterTabs() {
    const filterButtons = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
    if (!filterButtons.length || !filterItems.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetCategory = btn.getAttribute("data-filter-btn");
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        filterItems.forEach(function (item) {
          const itemCat = item.getAttribute("data-filter-item");
          if (targetCategory === "all" || itemCat === targetCategory) {
            item.style.display = "";
            item.classList.remove("is-revealed");
            requestAnimationFrame(function () {
              item.classList.add("is-revealed");
            });
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  let revealObserver = null;

  function initScrollReveal() {
    // Auto-assign data-reveal attributes to any section elements that don't already have them
    const sections = document.querySelectorAll(
      "section, main.auth_main_section, main.error_main_section, footer.main_footer, footer.auth_mini_footer, footer.error_mini_footer",
    );

    sections.forEach(function (sec) {
      // Hero / Inner Banner sections
      const bannerContent = sec.querySelector(".page_banner_content");
      if (bannerContent && !bannerContent.hasAttribute("data-reveal")) {
        bannerContent.setAttribute("data-reveal", "up");
      }

      const bannerLeft = sec.querySelector(".banner_left_text");
      if (bannerLeft && !bannerLeft.hasAttribute("data-reveal")) {
        bannerLeft.setAttribute("data-reveal", "left");
      }

      const bannerRight = sec.querySelector(".banner_right_card");
      if (bannerRight && !bannerRight.hasAttribute("data-reveal")) {
        bannerRight.setAttribute("data-reveal", "right");
        bannerRight.setAttribute("data-reveal-delay", "150");
      }

      // Section headers & titles
      sec
        .querySelectorAll(
          ".section_title_one, .section_title_two, .blog_section_home_one .outer_box, .event_section_home_one .mb_50, .services_content_home_one, .funfact_section_home_one .inner_container, .academic_filter_nav, .newsletter_innar_box, .flagship_event_wrap, .editorial_spotlight_box, .academic_calendar_box, .auth_split_card, .error_showcase_card",
        )
        .forEach(function (headerEl) {
          if (!headerEl.hasAttribute("data-reveal")) {
            headerEl.setAttribute("data-reveal", "up");
          }
        });

      // Content rows: stagger direct column children or reveal left/right for 2-column layouts
      sec.querySelectorAll(".row").forEach(function (row) {
        if (
          row.closest("form") ||
          row.closest(".auth_form_panel") ||
          row.closest(".error_content_col")
        )
          return;
        const cols = Array.from(row.children).filter(function (child) {
          return child.className && /\bcol(-|\b)/.test(child.className);
        });

        if (
          cols.length === 2 &&
          row.classList.contains("align-items-center") &&
          !cols[0].hasAttribute("data-filter-item")
        ) {
          if (!cols[0].hasAttribute("data-reveal")) {
            cols[0].setAttribute("data-reveal", "left");
          }
          if (!cols[1].hasAttribute("data-reveal")) {
            cols[1].setAttribute("data-reveal", "right");
            cols[1].setAttribute("data-reveal-delay", "150");
          }
        } else {
          cols.forEach(function (col, idx) {
            if (!col.hasAttribute("data-reveal")) {
              col.setAttribute("data-reveal", "up");
              const delay = (idx % 4) * 100;
              if (delay > 0 && !col.hasAttribute("data-reveal-delay")) {
                col.setAttribute("data-reveal-delay", String(delay));
              }
            }
          });
        }
      });

      // Timeline nodes, Agenda cards, Accordion items
      sec
        .querySelectorAll(".timeline_node, .agenda_slot_card, .accordion-item")
        .forEach(function (item, idx) {
          if (!item.hasAttribute("data-reveal")) {
            item.setAttribute("data-reveal", "up");
            const delay = Math.min(idx * 100, 400);
            if (delay > 0) {
              item.setAttribute("data-reveal-delay", String(delay));
            }
          }
        });
    });

    const revealElements = document.querySelectorAll("[data-reveal]");
    if (!revealElements.length) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealElements.forEach(function (el) {
        el.classList.add("is-revealed");
      });
      return;
    }

    if ("IntersectionObserver" in window) {
      if (!revealObserver) {
        revealObserver = new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add("is-revealed");
                setTimeout(function () {
                  target.style.setProperty("--reveal-delay", "0ms");
                }, 900);
                obs.unobserve(target);
              }
            });
          },
          {
            threshold: 0.06,
            rootMargin: "0px 0px -30px 0px",
          },
        );
      }

      revealElements.forEach(function (el) {
        if (!el.classList.contains("is-revealed")) {
          revealObserver.observe(el);
        }
      });
    } else {
      revealElements.forEach(function (el) {
        el.classList.add("is-revealed");
      });
    }
  }

  function initEventCountdown() {
    const daysEl = document.getElementById("cdDays");
    const hoursEl = document.getElementById("cdHours");
    const minsEl = document.getElementById("cdMinutes");
    const secsEl = document.getElementById("cdSeconds");
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const targetDate = new Date(
      Date.now() + 18 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000,
    );

    function updateTimer() {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(d).padStart(2, "0");
      hoursEl.textContent = String(h).padStart(2, "0");
      minsEl.textContent = String(m).padStart(2, "0");
      secsEl.textContent = String(s).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /**
   * Redirect any empty or "#" anchor links across the entire portal to the 404 page,
   * and handle "Go Back" buttons on the 404 page.
   */
  function prefillLoginFromRegistration() {
    const loginForm = document.getElementById("portalLoginForm");
    if (!loginForm) return;
    try {
      const regRaw = localStorage.getItem("stacklyRegisteredUser");
      if (!regRaw) return;
      const regData = JSON.parse(regRaw);
      const roleSelect = document.getElementById("loginRole");
      const emailInput = document.getElementById("loginEmail");
      if (roleSelect && regData.role && !roleSelect.value) {
        roleSelect.value = regData.role;
      }
      if (emailInput && regData.email && !emailInput.value) {
        emailInput.value = regData.email;
      }
    } catch (_) {}
  }

  /**
   * Redirect any empty or "#" anchor links across the entire portal to the 404 page,
   * and handle "Go Back" buttons on the 404 page.
   */
  function initEmptyLinkAnd404Controls() {
    document.addEventListener("click", function (e) {
      const goBackTrigger = e.target.closest("[data-go-back]");
      if (goBackTrigger) {
        e.preventDefault();
        const homeUrl = isInPagesFolder() ? "../index.html" : "index.html";
        if (window.history.length > 1) {
          window.history.back();
          setTimeout(function () {
            if (window.location.pathname.toLowerCase().includes("404.html")) {
              window.location.href = homeUrl;
            }
          }, 350);
        } else {
          window.location.href = homeUrl;
        }
        return;
      }

      const link = e.target.closest("a");
      if (!link) return;

      if (
        link.hasAttribute("data-no-404") ||
        link.hasAttribute("data-sidebar-tab") ||
        link.classList.contains("dash_sidebar_link") ||
        link.classList.contains("dash_logout_btn") ||
        link.closest("#dashSidebarNav")
      ) {
        return;
      }

      const rawHref = (link.getAttribute("href") || "").trim();
      if (
        rawHref === "" ||
        rawHref === "#" ||
        rawHref.toLowerCase() === "javascript:void(0)" ||
        rawHref.toLowerCase() === "javascript:;"
      ) {
        e.preventDefault();
        const target404 = isInPagesFolder() ? "404.html" : "pages/404.html";
        window.location.href = target404;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
    initCommonComponents();
    initCounters();
    initStrictFormRestrictions();
    prefillLoginFromRegistration();
    initFilterTabs();
    initEventCountdown();
    initEmptyLinkAnd404Controls();
  });
})();
