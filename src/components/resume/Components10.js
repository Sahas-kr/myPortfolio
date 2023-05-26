export default function Components10(props) {
    return (
        <div>


            <div>

                <div class="col-6  mt-1">
                    <h5>{props.title2}</h5>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" style={{ width: `${props.number}%` }}>{props.number}%</div>
                    </div>
                </div>

            </div>

        </div>
    );
}