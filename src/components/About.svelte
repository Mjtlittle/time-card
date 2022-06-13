<script lang="ts">
  import DayStatusButton from "./DayStatusButton.svelte";
  import DayStatusButtonDemo from "./DayStatusButtonDemo.svelte";
  import Toggle from "./Toggle.svelte";
</script>

<Toggle label="About">
  <h2>Using the App</h2>
  <p>
    For each day enter the time you clock-in and clock-out. The app will show
    how many paid hours you have completed for each day. The required lunch
    duration is automatically subtracted from these values. Valid entry formats
    include...
  </p>
  <ul>
    <li>5:30 PM => 5:30 PM</li>
    <li>5:30PM => 5:30 PM</li>
    <li>5:30p => 5:30 PM</li>
    <li>17:30 => 5:30 PM</li>
    <li>5 => 5:00 AM</li>
    <li>5a => 5:00 AM</li>
    <li>5am => 5:00 AM</li>
  </ul>
  <p>
    After typing the value, click the enter key or leave the field to change the
    value. 12 hour times not specifing AM or PM will default to AM for clock-in
    and PM for clock-out.
  </p>
  <p>
    If you have the <strong>Suggestions</strong> feature on, gray time
    suggestions will appear near each value. These suggestions are trying to
    satisfy the
    <strong>Target Weekly Hours</strong> you have set in the preferences.
  </p>
  <p>
    Toggling the checkmark next to each day removes it from the suggestions
    calculation. However, the weekly target time will still try to be hit; the
    disabled day will distribute its hours among the remaining enabled days.
  </p>

  <h2>Background</h2>
  <p>
    As an Intern at BMW, this project started as a replacement for a simple
    Excel spreadsheet time-card. My site had a few more features and a slightly
    better user interface. However, I had forgotten about another spreadsheet
    created by <span title="my sworn enemy in the great time-card war"
      >another intern, Karl S</span
    >. This one had many features that were not present in the first iteration
    of this app. So to claim a hold on the BMW time-card market, I recreated
    this site with most of the features and a much cleaner interface.
  </p>

  <h2>Going Forward</h2>
  <p>
    This was just a fun side project I've been passively working on. If you
    notice any bugs or have a feature request, open an issue <a
      href="https://github.com/Mjtlittle/time-card/issues">here</a
    > or message me.
  </p>

  <h2>Changelog</h2>

  <h3>Verson 4 (Jun 13, 2022):</h3>
  <ul>
    <li>Made the progress bar more useful</li>
    <ul>
      <li>Now shows progress through current day</li>
      <li>Shows percent of each day among the total amount of hours</li>
    </ul>
  </ul>

  <h3>Verson 3 (May 31, 2022):</h3>
  <ul>
    <li>Made clock-out column default to PM if PM/AM is not provided</li>
    <li>Fixed issue formatting times: "12:** PM" (=> 00:** PM)</li>
    <li>Added tabindex to each time input, allows for tab to next clock</li>
  </ul>

  <h3>Verson 2 (May 27, 2022):</h3>
  <ul>
    <li>Fully rewrote UI</li>
    <li>Replaced the time entry field component</li>
    <ul>
      <li>Exclusivly text based entry, no clickable UI anymore</li>
      <li>Custom formatter and parser</li>
    </ul>
    <li>Added live inline time predictions</li>
    <li>Toggle days to remove them from being considered</li>
    <li>Added a minimal interface mode</li>
  </ul>

  <h3>Verson 1 (May 17, 2022):</h3>
  <ul>
    <li>"Fill Week" button to populate predictions into table</li>
    <li>Calculate current hours</li>
  </ul>
</Toggle>
