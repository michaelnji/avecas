<script>
  import { url, isActive } from "@roxi/routify";
</script>

<div
  class=" w-screen lg:h-20 h-14 bg-base-100 text-base-content fixed bottom-0"
>
  <ul
    class="menu items-stretch justify-between w-full lg:px-8 md:px-4 px-2 h-full   horizontal rounded-t-md border"
  >
    <li class:bordered={$isActive("./index")}>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-6 sm:w-6 w-4 h-4 mr-3 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <b class="hidden md:inline"> Home</b>
      </a>
    </li>
    <li class:bordered={$isActive("/Events")}>
      <a href={$url("Events")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-6 sm:w-6 h-4 w-4 mr-3 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <b class="hidden md:inline"> Events</b>
      </a>
    </li>
    <li class:bordered={$isActive("/Entries")}>
      <a href={$url("Entries")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-6 sm:w-6 h-4 w-4 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <b class="hidden md:inline"> Add Entry</b>
      </a>
    </li>
    <li class:bordered={$isActive("/Notifications")}>
      <a href={$url("Notifications")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-6 sm:w-6 h-4 w-4 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <b class="hidden md:inline"> Notifications</b>
      </a>
    </li>
    <li class:bordered={$isActive("/Options")}>
      <a href={$url("Options")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sm:h-6 sm:w-6 h-4 w-4 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <b class="hidden md:inline"> Settings</b>
      </a>
    </li>
  </ul>
</div>
