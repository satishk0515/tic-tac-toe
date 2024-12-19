# tic-tac-toe
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    
    <link rel="stylesheet" href="styles.css">

</head>
<body class="bg-dark text-white">
    <div class="container mt-5">
        <h1 class="text-center mb-4">Tic Tac Toe</h1>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-12">
                <div id="board" class="mb-4">
                    <div class="row">
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="0"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="1"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="2"></button></div>
                    </div>
                    <div class="row">
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="3"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="4"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="5"></button></div>
                    </div>
                    <div class="row">
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="6"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="7"></button></div>
                        <div class="col-4 p-0"><button class="cell btn w-100" data-index="8"></button></div>
                    </div>

                </div>
                
            </div>

            <div class="col-lg-3 col-md-12">
                <button id="resetBtn" class="btn btn-lg btn-danger w-100">Reset Game</button>

                <div id="winnerCard" class="winner-card">
                    <h3 id="winnerText"></h3>
                    <video id="winnerVideo" loop autoplay>
                        <source src="win.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    
    <script src="scripts.js"></script>

</body>
</html>
