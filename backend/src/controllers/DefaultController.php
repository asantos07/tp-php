<?php

namespace Controller;

/**
 * Superclasse dos controllers
 *
 * @author Ariel
 */
abstract class DefaultController {

    protected $ci;

    public function __construct(ContainerInterface $ci) {
        $this->ci = $ci;
    }

    abstract public function __invoke($request, $response, $args);
}
