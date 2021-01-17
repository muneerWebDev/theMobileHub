<?php include 'parts/header.php'; ?>
<main class="booking-page">


    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 text-center">

                    <h1 class="banner-title">Book an appointment</h1>

                    <div class="icalendar">
                        <div class="icalendar__month">
                            <div class="icalendar__prev" onclick="moveDate('prev')">
                                <span>&#10094</span>
                            </div>
                            <div class="icalendar__current-date">
                                <h2 id="icalendarMonth"></h2>
                                <div>
                                    <div id="icalendarDateStr"></div>
                                </div>

                            </div>
                            <div class="icalendar__next" onclick="moveDate('next')">
                                <span>&#10095</span>
                            </div>
                        </div>
                        <div class="icalendar__week-days">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div class="icalendar__days"></div>
                    </div>

                    <div class="timeAndContinue">
                        <label for="">Select your time</label>
                        <div class="wrap">
                            <input type="time" class="form-control" value="10:00">
                            <a href="booking_fill-contact.php" class="btn btn-primary">Next</a>
                        </div>
                    </div>

                </div>
            </div>
    </section>

<script src="js/calendar.js"></script>
</main> <?php include 'parts/footer.php'; ?>